"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { User, LogOut, ShoppingBag } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AuthButton() {
  // Mock user state - replace with your authentication logic
  const [user, setUser] = useState<any>(null) // Set to null to show login buttons, or mock user object to show user menu

  const handleSignOut = () => {
    // Replace with your sign out logic
    setUser(null)
    console.log("User signed out")
  }

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Button variant="ghost" asChild className="text-stone-300 hover:text-yellow-600">
          <Link href="/auth/login">Login</Link>
        </Button>
        <Button asChild className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold">
          <Link href="/auth/sign-up">Wholesale Account</Link>
        </Button>
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span className="hidden md:inline">{user.email || "User"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem asChild>
          <Link href="/gifting" className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            Gifting
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="flex items-center gap-2 text-red-600">
          <LogOut className="w-4 h-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
