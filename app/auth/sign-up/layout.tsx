import type { ReactNode } from "react"
import type { Metadata } from "next"
import { canonicalForPath } from "@/lib/canonical-metadata"

export const metadata: Metadata = {
  ...canonicalForPath("/auth/sign-up"),
  robots: { index: false, follow: false },
}

export default function AuthSignUpLayout({ children }: { children: ReactNode }) {
  return children
}
