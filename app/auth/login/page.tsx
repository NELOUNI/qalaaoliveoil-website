"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"

const LoginForm = () => {
  const { language } = useLanguage()
  const isArabic = language === "ar"
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Replace with your authentication logic
      console.log("Login attempt:", { email, password })
      
      // Mock authentication - replace with your actual auth logic
      if (email && password) {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        router.push("/protected")
      } else {
        throw new Error(isArabic ? "يرجى إدخال البريد الإلكتروني وكلمة المرور" : "Please enter both email and password")
      }
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : isArabic ? "حدث خطأ ما" : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">{isArabic ? "البريد الإلكتروني" : "Email"}</Label>
          <Input
            id="email"
            type="email"
            placeholder={isArabic ? "name@example.com" : "m@example.com"}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">{isArabic ? "كلمة المرور" : "Password"}</Label>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (isArabic ? "جاري تسجيل الدخول..." : "Logging in...") : isArabic ? "تسجيل الدخول" : "Login"}
        </Button>
      </div>
    </form>
  )
}

export default function LoginPage() {
  const { language } = useLanguage()
  const isArabic = language === "ar"

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{isArabic ? "تسجيل دخول الجملة" : "Wholesale Login"}</h1>
          <p className="text-gray-600">{isArabic ? "الوصول إلى حساب الجملة" : "Access your wholesale account"}</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardContent className="p-8">
            <LoginForm />

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isArabic ? "تحتاج حساب جملة؟ " : "Need a wholesale account? "}
                <Link href="/auth/sign-up" className="text-amber-600 hover:text-amber-700 font-medium">
                  {isArabic ? "قدّم من هنا" : "Apply here"}
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
