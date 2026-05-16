import type { ReactNode } from "react"
import type { Metadata } from "next"
import { canonicalForPath } from "@/lib/canonical-metadata"

export const metadata: Metadata = canonicalForPath("/terms")

export default function TermsLayout({ children }: { children: ReactNode }) {
  return children
}
