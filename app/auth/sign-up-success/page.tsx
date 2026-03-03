"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export default function Page() {
  const { language } = useLanguage()
  const isArabic = language === "ar"

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{isArabic ? "شكرًا لتسجيلك!" : "Thank you for signing up!"}</CardTitle>
              <CardDescription>{isArabic ? "تحقق من بريدك الإلكتروني للتأكيد" : "Check your email to confirm"}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {isArabic
                  ? "تم إنشاء حسابك بنجاح. يرجى التحقق من بريدك الإلكتروني لتأكيد الحساب قبل تسجيل الدخول."
                  : "You've successfully signed up. Please check your email to confirm your account before signing in."}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
