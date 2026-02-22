import { redirect } from "next/navigation"

export default async function ProtectedPage() {
  // Replace with your authentication logic
  // You can add authentication checks here
  redirect("/products")
}
