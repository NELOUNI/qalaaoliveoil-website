import type { ReactNode } from "react"
import type { Metadata } from "next"
import { canonicalForPath } from "@/lib/canonical-metadata"

export const metadata: Metadata = canonicalForPath("/products")

export default function ProductsListingLayout({ children }: { children: ReactNode }) {
  return children
}
