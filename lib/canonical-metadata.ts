import type { Metadata } from "next"

/** Use with metadataBase in root layout so canonical resolves to absolute URLs. */
export function canonicalForPath(pathname: string): Metadata {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`
  return { alternates: { canonical: path } }
}
