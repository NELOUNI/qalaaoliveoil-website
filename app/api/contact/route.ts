import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const TO_EMAIL = "contact@Tunevoo.com"
const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const MAX_SUBJECT_LENGTH = 150
const MAX_MESSAGE_LENGTH = 5000
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 5
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const ipRateLimitStore = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown"
  }
  return request.headers.get("x-real-ip") || "unknown"
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const current = ipRateLimitStore.get(ip)

  if (!current || now > current.resetAt) {
    ipRateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
    return false
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  }

  current.count += 1
  return false
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function toSafeString(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again shortly." },
        { status: 429 }
      )
    }

    const body = await request.json()
    const name = toSafeString(body?.name)
    const email = toSafeString(body?.email)
    const subject = toSafeString(body?.subject)
    const message = toSafeString(body?.message)

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (name.length > MAX_NAME_LENGTH || email.length > MAX_EMAIL_LENGTH || subject.length > MAX_SUBJECT_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ error: "One or more fields exceed allowed length." }, { status: 400 })
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 })
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeSubject = escapeHtml(subject)
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured. Add it to .env.local")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Qalaa Contact] ${subject}`,
      html: `
        <h2>New message from Qalaa website</h2>
        <p><strong>From:</strong> ${safeName} (${safeEmail})</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <hr />
        <p>${safeMessage}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
