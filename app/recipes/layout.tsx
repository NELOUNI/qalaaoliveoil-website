import type { ReactNode } from "react"
import type { Metadata } from "next"
import { canonicalForPath } from "@/lib/canonical-metadata"

export const metadata: Metadata = canonicalForPath("/recipes")

export default function RecipesLayout({ children }: { children: ReactNode }) {
  return children
}
