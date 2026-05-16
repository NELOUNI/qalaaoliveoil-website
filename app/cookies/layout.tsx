import type { ReactNode } from "react"
import type { Metadata } from "next"
import { canonicalForPath } from "@/lib/canonical-metadata"

export const metadata: Metadata = canonicalForPath("/cookies")

export default function CookiesLayout({ children }: { children: ReactNode }) {
  return children
}
