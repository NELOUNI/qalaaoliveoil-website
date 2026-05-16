import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { canonicalForPath } from "@/lib/canonical-metadata"

export const metadata: Metadata = {
  ...canonicalForPath("/protected"),
  robots: { index: false, follow: false },
}

export default async function ProtectedPage() {
  // Replace with your authentication logic
  // You can add authentication checks here
  redirect("/products")
}
