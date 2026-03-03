"use client"

import { Gift, Package, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

type Lang = "en" | "ar"

export function GiftingHero({ language }: { language: Lang }) {
  const isArabic = language === "ar"

  const content = isArabic
    ? {
        title: "هدايا زيت الزيتون الفاخرة",
        subtitle:
          "اصنع الهدية المثالية مع زيوت الزيتون التونسية الفاخرة. كل هدية تُنسَّق بعناية وتُقدَّم بتغليف أنيق للاحتفاء بالمناسبات المميزة.",
        feature1: "تغليف يدوي",
        feature2: "رسائل شخصية",
        feature3: "عرض فاخر",
        cta: "اصنع هديتك",
      }
    : {
        title: "Luxury Olive Oil Gifts",
        subtitle:
          "Create the perfect gift with our premium Tunisian olive oils. Each gift is carefully curated and beautifully packaged to celebrate life's special moments.",
        feature1: "Handcrafted Packaging",
        feature2: "Personal Messages",
        feature3: "Premium Presentation",
        cta: "Create Your Gift",
      }

  return (
    <section className="relative py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Gift className="w-16 h-16 text-primary" />
            <Sparkles className="w-6 h-6 text-yellow-500 absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>

        <h1 className="text-5xl font-serif font-bold text-foreground mb-6 text-balance">{content.title}</h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          {content.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-gray-700">
            <Package className="w-5 h-5 text-primary" />
            <span>{content.feature1}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Gift className="w-5 h-5 text-primary" />
            <span>{content.feature2}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <span>{content.feature3}</span>
          </div>
        </div>

        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
          onClick={() => document.getElementById("configurator")?.scrollIntoView({ behavior: "smooth" })}
        >
          {content.cta}
        </Button>
      </div>
    </section>
  )
}
