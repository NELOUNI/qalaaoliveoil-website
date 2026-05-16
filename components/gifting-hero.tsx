"use client"

import { Gift, Package, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

type Lang = "en" | "ar" | "fr"

export function GiftingHero({ language }: { language: Lang }) {
  const content =
    language === "ar"
      ? {
          title: "هدايا زيت الزيتون الفاخرة",
          subtitle:
            "اصنع الهدية المثالية مع زيوت الزيتون التونسية الفاخرة. كل هدية تُنسَّق بعناية وتُقدَّم بتغليف أنيق للاحتفاء بالمناسبات المميزة.",
          feature1: "تغليف يدوي",
          feature2: "رسائل شخصية",
          feature3: "عرض فاخر",
          cta: "اصنع هديتك",
        }
      : language === "fr"
        ? {
            title: "Cadeaux huile d'olive d'exception",
            subtitle:
              "Composez un présent inoubliable avec nos huiles tunisiennes ultra-premium : sélection, message et coffret dignes des grandes tables.",
            feature1: "Coffrets faits main",
            feature2: "Mots personnels",
            feature3: "Présentation soignée",
            cta: "Créer mon cadeau",
          }
        : {
            title: "Luxury olive oil gifts",
            subtitle:
              "Create the perfect gift with our ultra-premium Tunisian oils — curated, personal, and packaged to mark the moments that matter.",
            feature1: "Handcrafted packaging",
            feature2: "Personal messages",
            feature3: "Premium presentation",
            cta: "Create your gift",
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
