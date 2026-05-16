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
      question: "ما الذي يجعل زيت الزيتون لديكم بجودة ممتازة؟",
      answer:
        "زيت الزيتون لدينا مصنوع من زيتون يُقطف يدويًا من أشجار يزيد عمرها عن 50 عامًا. نعتمد العصر على البارد خلال 24 ساعة من الحصاد للحفاظ على النكهة والقيمة الغذائية، ويتم اختبار كل دفعة وفق معايير صارمة للزيت البكر الممتاز.",
    },
    {
      question: "كيف أحفظ زيت الزيتون؟",
      answer:
        "يُحفظ في مكان بارد ومظلم بعيدًا عن الحرارة والضوء. احكم إغلاق الزجاجة واستخدمها خلال 18 إلى 24 شهرًا من تاريخ الحصاد للحصول على أفضل نكهة.",
    },
    {
      question: "ما الفرق بين أنواع زيت الزيتون لديكم؟",
      answer:
        "يأتي كل نوع من أصناف ومناطق مختلفة. احتياطي قلعة الذهبي مزيج فاخر من الشتوِي والشملالي بنكهة مركّبة، أما غابة النغر المباركة فهو شتوِي نقي بطابع عشبي وفلفلي قوي من دومين النغر.",
    },
    {
      question: "هل يمكن زيارة بساتين الزيتون؟",
      answer:
        "نعم، نوفر جولات إرشادية تشمل مراحل الإنتاج وجلسات تذوق، ويمكن الحجز عبر صفحة المواقع.",
    },
    {
      question: "ما هي سياسة الاسترجاع؟",
      answer:
        "نوفر ضمان رضا كامل. إذا لم تكن راضيًا، تواصل معنا خلال 30 يومًا للاسترجاع أو الاستبدال.",
    },
    {
      question: "هل تشحنون دوليًا؟",
      answer:
        "نعم، نشحن إلى مختلف الدول. تختلف تكلفة الشحن ومدة التسليم حسب الوجهة.",
    },
    {
      question: "كيف أعرف أن زيت الزيتون فقد جودته؟",
      answer:
        "زيت الزيتون البكر الممتاز الطازج يتميز برائحة فاكهية وطعم فلفلي خفيف. من علامات تراجع الجودة الرائحة غير المستحبة أو الطعم الحامض.",
    },
  ]

  const faqsEn = [
    {
      question: "What makes your olive oil premium quality?",
      answer:
        "Our olive oil is made from hand-picked olives from trees that are over 50 years old. We use traditional cold-pressing methods within 24 hours of harvest to ensure maximum flavor and nutritional value. Each batch is tested for acidity levels and meets strict extra virgin standards.",
    },
    {
      question: "How should I store my olive oil?",
      answer:
        "Store your olive oil in a cool, dark place away from heat and light. Keep the bottle tightly sealed and use within 18-24 months of the harvest date for optimal flavor. Avoid storing near the stove or in direct sunlight.",
    },
    {
      question: "What's the difference between your olive oil varieties?",
      answer:
        "Each cuvée is a different conversation with the fruit. Gold Reserve of Qalaa is our ultra-premium blend of Chetoui and Chemlali — layered fruit, cut grass, and a long peppery finish. Sacred Grove of Al Nagr is a monovarietal Chetoui from the same domaine for those who want intensity: bold grass, almond butter, and structured spice — ideal raw on simple plates.",
    },
    {
      question: "Can I visit your olive groves?",
      answer:
        "We offer guided tours of our olive groves at Domaine Al Nagr, including the production process and oil tasting sessions. Tours are available Monday through Saturday and can be booked through our locations page or by calling directly.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 100% satisfaction guarantee. If you're not completely satisfied with your purchase, contact us within 30 days for a full refund or exchange.",
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

  const faqsFr = [
    {
      question: "Qu'est-ce qui rend votre huile d'olive « ultra-premium » ?",
      answer:
        "Des olives cueillies au bon moment, un passage au moulin rapide après la récolte, une extraction à froid maîtrisée, et une acidité maintenue dans la zone d'excellence. Chaque lot est goûté : nous cherchons une bouche nette, longue, mémorable — pas seulement une étiquette.",
    },
    {
      question: "Comment conserver mon huile ?",
      answer:
        "À l'abri de la lumière et de la chaleur, bouchon bien fermé. Idéalement dans les 18 à 24 mois suivant la récolte pour une palette aromatique au sommet. Évitez le plan de travail près de la cuisinière.",
    },
    {
      question: "Quelle différence entre vos deux cuvées ?",
      answer:
        "Réserve d'or de Qalaa : assemblage méticuleux Chetoui / Chemlali, fruité, herbe fraîche, finale poivrée longue. Bosquet sacré d'Al Nagr : Chetoui monovariétal du même domaine, plus affirmé — herbe intense, beurré d'amande, épice structurée ; pensé pour finir les plats à cru.",
    },
    {
      question: "Puis-je visiter l'oliveraie ?",
      answer:
        "Oui — visites guidées au Domaine Al Nagr, parcours de production et dégustation. Renseignements via notre page Lieux ou par téléphone.",
    },
    {
      question: "Politique de retour ?",
      answer:
        "Satisfaction prioritaire : contactez-nous sous 30 jours en cas de problème pour remboursement ou échange, selon les conditions applicables.",
    },
    {
      question: "Livrez-vous à l'international ?",
      answer:
        "Oui, vers de nombreux pays. Délais et frais varient selon la destination ; emballages conçus pour protéger la bouteille. Certains pays restreignent l'importation de denrées.",
    },
    {
      question: "Comment repérer une huile qui a tourné ?",
      answer:
        "Une bonne vierge extra sent le fruit et picote légèrement en gorge. Rancio : odeur de moisi, amertume ou acidité désagréable, aspect trouble. Nos bouteilles portent des repères de récolte pour suivre la fraîcheur.",
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
