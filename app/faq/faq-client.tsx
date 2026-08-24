"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { StructuredData } from "@/components/structured-data"
import { Footer } from "@/components/footer"

export function FAQClient() {
  const { t, language } = useLanguage()
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqsAr = [
    {
      question: "ما الذي يميز زيتكم؟",
      answer:
        "شتوي يُقطف مبكراً ويُعصر على البارد خلال ساعات. الحموضة أقل من ٪٠٫٢. كل دفعة تُذاق.",
    },
    {
      question: "كيف أحفظ الزيت؟",
      answer: "بعيداً عن الحرارة والضوء، والزجاجة مغلقة. يُستحسن خلال ١٨ إلى ٢٤ شهراً من الحصاد.",
    },
    {
      question: "ما الفرق بين الزجاجات؟",
      answer: "الزيت واحد. ثلاث زجاجات: لينفا ٢٥٠ مل، لينفا ٥٠٠ مل، كوادرا ٥٠٠ مل.",
    },
    {
      question: "هل يمكن زيارة البساتين؟",
      answer: "نعم. الجولات عبر صفحة المواقع.",
    },
    {
      question: "ما هي سياسة الاسترجاع؟",
      answer: "خلال ٣٠ يوماً، للاسترجاع أو الاستبدال.",
    },
    {
      question: "هل تشحنون دوليًا؟",
      answer: "نعم. تختلف التكلفة والمدة حسب الوجهة.",
    },
    {
      question: "كيف أعرف أن الزيت فقد جودته؟",
      answer: "الزيت الطازج فاكهي، مع لمسة فلفلية. الرائحة العفنة أو الطعم الحامض علامتان على التلف.",
    },
  ]

  const faqsEn = [
    {
      question: "What is in the bottle?",
      answer:
        "Early-harvest Chetoui, cold-extracted within hours. Acidity below 0.2%. Each batch is tasted.",
    },
    {
      question: "How should I store it?",
      answer: "Cool, dark, tightly sealed. Best within 18–24 months of harvest.",
    },
    {
      question: "How do the bottles differ?",
      answer: "The oil does not. Three bottles: Linfa 250 ml, Linfa 500 ml, Quadra 500 ml.",
    },
    {
      question: "Can I visit the groves?",
      answer: "Yes. Tours can be arranged through our locations page.",
    },
    {
      question: "What is your return policy?",
      answer: "Within 30 days, for a refund or exchange.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes. Cost and timing depend on destination.",
    },
    {
      question: "How can I tell if the oil has turned?",
      answer: "Fresh oil smells of fruit and finishes with a light pepper. Mustiness or sourness means it has gone.",
    },
  ]

  const faqsFr = [
    {
      question: "Que contient la bouteille ?",
      answer:
        "Un Chetoui de récolte précoce, extrait à froid dans les heures. Acidité inférieure à 0,2 %. Chaque lot est goûté.",
    },
    {
      question: "Comment la conserver ?",
      answer: "À l'abri de la lumière et de la chaleur, bouchon fermé. Idéalement dans les 18 à 24 mois suivant la récolte.",
    },
    {
      question: "Quelle différence entre les flacons ?",
      answer: "Aucune, dans l'huile. Trois flacons : Linfa 250 ml, Linfa 500 ml, Quadra 500 ml.",
    },
    {
      question: "Puis-je visiter l'oliveraie ?",
      answer: "Oui. Les visites se préparent via notre page Lieux.",
    },
    {
      question: "Politique de retour ?",
      answer: "Sous 30 jours, remboursement ou échange.",
    },
    {
      question: "Livrez-vous à l'international ?",
      answer: "Oui. Délais et frais selon la destination.",
    },
    {
      question: "Comment savoir si l'huile a tourné ?",
      answer: "Une huile fraîche sent le fruit et picote légèrement. Moisi ou aigreur : elle a tourné.",
    },
  ]

  const faqs = language === "ar" ? faqsAr : language === "fr" ? faqsFr : faqsEn

  return (
    <>
      <StructuredData type="faq" data={faqs} />
      <div className="min-h-screen bg-gradient-to-b from-[var(--matte-black)] to-background">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-6 text-balance">{t("faq.title")}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t("faq.subtitle")}</p>
          </div>
        </section>

      {/* FAQ Items */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/20 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  )
}
