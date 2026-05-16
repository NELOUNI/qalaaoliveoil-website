import type { Metadata } from "next"
import { canonicalForPath } from "@/lib/canonical-metadata"
import { GiftingPageClient } from "./gifting-client"

export const metadata: Metadata = {
  ...canonicalForPath("/gifting"),
}

export default function GiftingPage() {
  return <GiftingPageClient />
}
