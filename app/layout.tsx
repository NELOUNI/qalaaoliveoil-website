import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Inter, Crimson_Text } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { DevelopmentBanner } from "@/components/development-banner"
import { LanguageProvider } from "@/components/language-provider"
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
  icons: {
    icon: "/Qalaa_LOGO_1-Gold.svg",
    apple: "/qalaa-logo.gold.svg",
  },
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
        <link rel="icon" href="/Qalaa_LOGO_1-Gold.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/qalaa-logo.gold.svg" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <LanguageProvider>
            <DevelopmentBanner />
            <Navigation />
            <main className="min-h-screen pt-4">{children}</main>
          </LanguageProvider>
        </Suspense>
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.omnisend = window.omnisend || [];
              omnisend.push(["brandID", "6998ec1836a59ce3ac70f9d8"]);
              omnisend.push(["track", "$pageViewed"]);
              !function(){var e=document.createElement("script");
              e.type="text/javascript",e.async=!0,
              e.src="https://omnisnippet1.com/inshop/launcher-v2.js";
              var t=document.getElementsByTagName("script")[0];
              t.parentNode.insertBefore(e,t)}();
            `,
          }}
        />
      </body>
    </html>
  )
}
