import type React from "react"
import type { Metadata } from "next"
import { Inter, Crimson_Text } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/components/language-provider"
import { DevelopmentBanner } from "@/components/development-banner"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
})

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-crimson",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Qalaa - Premium Tunisian Olive Oil | Guardians of the Olive",
  description:
    "Discover Qalaa's fortress of flavor - premium extra virgin olive oils from Tunisia's ancient groves. Guardians of the Olive, Keepers of the Gold.",
  keywords: "premium olive oil, Tunisian olive oil, extra virgin, Mediterranean, luxury food, artisanal, organic",
  authors: [{ name: "Qalaa" }],
  creator: "Qalaa",
  publisher: "Qalaa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://qalaaoliveoil.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ar-SA": "/ar-SA",
    },
  },
  openGraph: {
    title: "Qalaa - Premium Tunisian Olive Oil",
    description:
      "Guardians of the Olive, Keepers of the Gold. Premium extra virgin olive oils from Tunisia's ancient groves.",
    url: "https://qalaaoliveoil.com",
    siteName: "Qalaa",
    images: [
      {
        url: "/qalaa-logo.png",
        width: 1200,
        height: 630,
        alt: "Qalaa Premium Olive Oil Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qalaa - Premium Tunisian Olive Oil",
    description: "Guardians of the Olive, Keepers of the Gold",
    images: ["/qalaa-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonText.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/qalaa-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/qalaa-logo.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-stone-50 text-stone-900">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <LanguageProvider>
            <DevelopmentBanner />
            <Navigation />
            <main className="min-h-screen pt-20">{children}</main>
          </LanguageProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
