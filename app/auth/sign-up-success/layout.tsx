import type { ReactNode } from "react"
import type { Metadata } from "next"
import { canonicalForPath } from "@/lib/canonical-metadata"

export const metadata: Metadata = {
  ...canonicalForPath("/auth/sign-up-success"),
  robots: { index: false, follow: false },
}

export default function AuthSignUpSuccessLayout({ children }: { children: ReactNode }) {
  return children
}
