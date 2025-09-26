import { redirect } from "next/navigation"

export default async function ProtectedPage() {
  // Replace with your authentication logic
  // For now, redirect to wholesale portal
  // You can add authentication checks here
  redirect("/wholesale")
}
