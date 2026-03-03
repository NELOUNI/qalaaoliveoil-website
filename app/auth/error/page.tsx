"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { useSearchParams } from "next/navigation"

export default function Page() {
  const { language } = useLanguage()
  const isArabic = language === "ar"
  const searchParams = useSearchParams()
  const errorCode = searchParams.get("error")

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{isArabic ? "عذرًا، حدث خطأ ما." : "Sorry, something went wrong."}</CardTitle>
            </CardHeader>
            <CardContent>
              {errorCode ? (
                <p className="text-sm text-muted-foreground">
                  {isArabic ? "رمز الخطأ: " : "Code error: "}
                  {errorCode}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  {isArabic ? "حدث خطأ غير محدد." : "An unspecified error occurred."}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
