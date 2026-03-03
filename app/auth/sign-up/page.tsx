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

export default function SignUpPage() {
  const { language } = useLanguage()
  const isArabic = language === "ar"
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    if (password !== repeatPassword) {
      setError(isArabic ? "كلمتا المرور غير متطابقتين" : "Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      // Replace with your registration logic
      console.log("Sign up attempt:", { email, password })
      
      // Mock registration - replace with your actual registration logic
      if (email && password) {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        router.push("/auth/sign-up-success")
      } else {
        throw new Error(isArabic ? "يرجى ملء جميع الحقول" : "Please fill in all fields")
      }
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : isArabic ? "حدث خطأ ما" : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{isArabic ? "طلب حساب الجملة" : "Wholesale Application"}</h1>
          <p className="text-gray-600">
            {isArabic ? "قدّم للحصول على حساب جملة للوصول إلى أسعار الكميات" : "Apply for a wholesale account to access bulk pricing"}
          </p>
        </div>

        <Card className="shadow-xl border-0">
          <CardContent className="p-8">
            <form onSubmit={handleSignUp}>
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
                  <div className="flex items-center">
                    <Label htmlFor="password">{isArabic ? "كلمة المرور" : "Password"}</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="repeat-password">{isArabic ? "تأكيد كلمة المرور" : "Repeat Password"}</Label>
                  </div>
                  <Input
                    id="repeat-password"
                    type="password"
                    required
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (isArabic ? "جاري إنشاء الحساب..." : "Creating an account...") : isArabic ? "إنشاء حساب" : "Sign up"}
                </Button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isArabic ? "لديك حساب بالفعل؟ " : "Already have an account? "}
                <Link href="/auth/login" className="text-amber-600 hover:text-amber-700 font-medium">
                  {isArabic ? "تسجيل الدخول" : "Sign in"}
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
