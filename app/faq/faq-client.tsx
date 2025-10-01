"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { StructuredData } from "@/components/structured-data"
import { Footer } from "@/components/footer"

export function FAQClient() {
  const { t } = useLanguage()
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "What makes your olive oil premium quality?",
      answer:
        "Our olive oil is made from hand-picked olives from trees that are over 200 years old. We use traditional cold-pressing methods within 24 hours of harvest to ensure maximum flavor and nutritional value. Each batch is tested for acidity levels and meets strict extra virgin standards.",
    },
    {
      question: "How should I store my olive oil?",
      answer:
        "Store your olive oil in a cool, dark place away from heat and light. Keep the bottle tightly sealed and use within 18-24 months of the harvest date for optimal flavor. Avoid storing near the stove or in direct sunlight.",
    },
    {
      question: "What's the difference between your olive oil varieties?",
      answer:
        "Each variety comes from different olive cultivars and regions. Heritage Gold is our premium blend with complex flavors, Coastal Breeze offers a lighter, fruitier taste, and Sacred Grove Reserve is our limited edition with intense, robust flavors perfect for finishing dishes.",
    },
    {
      question: "Do you offer wholesale pricing?",
      answer:
        "Yes, we offer wholesale pricing for restaurants, retailers, and corporate clients. Volume discounts start at 50 bottles with additional savings for larger orders. Contact our wholesale team for custom pricing and terms.",
    },
    {
      question: "Can I visit your olive groves?",
      answer:
        "We offer guided tours of our olive groves in Sfax, including the production process and oil tasting sessions. Tours are available Monday through Saturday and can be booked through our locations page or by calling directly.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 100% satisfaction guarantee. If you're not completely satisfied with your purchase, contact us within 30 days for a full refund or exchange. For wholesale orders, different terms may apply.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship worldwide. Shipping costs and delivery times vary by destination. We use specialized packaging to ensure your olive oil arrives in perfect condition. Some countries may have import restrictions on food products.",
    },
    {
      question: "How can I tell if olive oil has gone bad?",
      answer:
        "Fresh extra virgin olive oil should have a fruity aroma and slightly peppery taste. Signs of rancidity include a musty smell, bitter or sour taste, or cloudy appearance. Our oils include harvest dates to help you track freshness.",
    },
  ]

  return (
    <>
      <StructuredData type="faq" data={faqs} />
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6 text-balance">{t("faq.title")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">{t("faq.subtitle")}</p>
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
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-amber-50 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
