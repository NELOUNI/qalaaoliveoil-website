"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

/**
 * Pushes a page_view event to dataLayer on every route change so GTM tags
 * (e.g. GA4) fire on all pages, including client-side navigations to /faq, /gifting, /recipes, etc.
 * In GTM: create a trigger "Custom Event" with Event name = "page_view", use it for your tag.
 */
export function GtmPageView() {
  const pathname = usePathname()
  const previousPath = useRef<string | null>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !pathname) return
    // Avoid duplicate push on same path (e.g. strict mode double mount)
    if (previousPath.current === pathname) return
    previousPath.current = pathname

    const win = window as Window & { dataLayer?: Array<Record<string, unknown>> }
    win.dataLayer = win.dataLayer || []
    win.dataLayer.push({
      event: "page_view",
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pathname])

  return null
}
