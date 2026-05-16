import type { ReactNode } from "react"
import type { Metadata } from "next"
import { canonicalForPath } from "@/lib/canonical-metadata"

export const metadata: Metadata = canonicalForPath("/story")

export default function StoryLayout({ children }: { children: ReactNode }) {
  return children
}
