import type { ReactNode } from "react"
import type { Metadata } from "next"
import { canonicalForPath } from "@/lib/canonical-metadata"

export const metadata: Metadata = canonicalForPath("/know-your-oil")

export default function KnowYourOilLayout({ children }: { children: ReactNode }) {
  return children
}
