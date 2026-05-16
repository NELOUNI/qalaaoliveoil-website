import type { ReactNode } from "react"
import type { Metadata } from "next"
import { canonicalForPath } from "@/lib/canonical-metadata"

export const metadata: Metadata = canonicalForPath("/locations")

export default function LocationsLayout({ children }: { children: ReactNode }) {
  return children
}
