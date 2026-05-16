import type { ReactNode } from "react"
import type { Metadata } from "next"
import { canonicalForPath } from "@/lib/canonical-metadata"

export const metadata: Metadata = canonicalForPath("/contact")

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
