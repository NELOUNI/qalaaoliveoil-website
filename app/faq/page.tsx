import { FAQClient } from "./faq-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - Qalaa Premium Olive Oil | Frequently Asked Questions",
  description: "Find answers to common questions about Qalaa premium Tunisian olive oil, shipping, quality, and more.",
  keywords: "olive oil FAQ, Tunisian olive oil questions, premium olive oil help, Qalaa support",
}

export default function FAQPage() {
  return <FAQClient />
}
