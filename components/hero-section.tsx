"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroBackgroundVideo } from "@/components/hero-background-video"
import { useLanguage } from "./language-provider"

const HERO_LOGO_SRC = "/Qalaa_LOGO_1-Gold.svg"
const HERO_POSTER = "/images/hero/hero-poster.webp"
const HERO_VIDEO_MP4 = "/hero-desktop.mp4"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroBackgroundVideo posterSrc={HERO_POSTER} videoMp4={HERO_VIDEO_MP4} />
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/55 to-black/25" aria-hidden />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 max-w-4xl mx-auto pt-20 pb-24">
        <Link
          href="/"
          className="mb-6 sm:mb-8 block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--antique-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          aria-label="Qalaa — home"
        >
          <Image
            src={HERO_LOGO_SRC}
            alt=""
            width={360}
            height={128}
            priority
            className="h-auto w-48 sm:w-60 md:w-80 object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          />
        </Link>
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[var(--antique-gold)]/95 mb-5 font-medium">
          {t("brand.tagline")}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--soft-sand)] mb-6 text-balance leading-tight">
          {t("home.hero.title")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[var(--soft-sand)]/85 max-w-2xl mb-10 text-pretty leading-relaxed">
          {t("home.hero.subtitle")}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[var(--antique-gold)] hover:bg-[var(--antique-gold)]/90 text-[var(--matte-black)] font-semibold px-8"
        >
          <Link href="/products">{t("home.hero.cta")}</Link>
        </Button>
      </div>
    </section>
  )
}
