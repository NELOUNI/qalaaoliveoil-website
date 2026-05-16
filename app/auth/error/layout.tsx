import type { ReactNode } from "react"
import type { Metadata } from "next"
import { canonicalForPath } from "@/lib/canonical-metadata"

export const metadata: Metadata = {
  ...canonicalForPath("/auth/error"),
  robots: { index: false, follow: false },
}

export default function AuthErrorLayout({ children }: { children: ReactNode }) {
  return children
}
