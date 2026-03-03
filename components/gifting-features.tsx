import { Shield, Truck, Package, Award, Clock, Gift } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

type Lang = "en" | "ar"

export function GiftingFeatures({ language }: { language: Lang }) {
  const isArabic = language === "ar"

  const content = isArabic
    ? {
        heading: "لماذا تختار خدمة الهدايا لدينا",
        subtitle: "نقدّم تجربة متكاملة تضمن أن تترك هديتك انطباعًا لا يُنسى",
        features: [
          {
            icon: Shield,
            title: "ضمان الجودة",
            description: "كل زجاجة يتم اختيارها وفحصها بعناية قبل التغليف",
          },
          {
            icon: Truck,
            title: "توصيل فاخر",
            description: "خدمة توصيل مميزة مع تتبع وتأكيد الاستلام",
          },
          {
            icon: Package,
            title: "تغليف يدوي",
            description: "يتم تغليف كل هدية بعناية على يد مختصّي التغليف لدينا",
          },
          {
            icon: Award,
            title: "زيوت حائزة على جوائز",
            description: "زيوت الزيتون لدينا حصدت جوائز في مسابقات دولية متعددة",
          },
          {
            icon: Clock,
            title: "جدولة مرنة",
            description: "حدّد موعد التسليم حتى 6 أشهر مسبقًا للمناسبات الخاصة",
          },
          {
            icon: Gift,
            title: "هدايا الشركات",
            description: "طلبات بالجملة وخيارات تخصيص العلامة متاحة لعملاء الشركات",
          },
        ],
      }
    : {
        heading: "Why Choose Our Gifting Service",
        subtitle: "We go above and beyond to ensure your gift creates a lasting impression",
        features: [
          {
            icon: Shield,
            title: "Quality Guarantee",
            description: "Every bottle is carefully selected and quality tested before packaging",
          },
          {
            icon: Truck,
            title: "Premium Delivery",
            description: "White-glove delivery service with tracking and signature confirmation",
          },
          {
            icon: Package,
            title: "Handcrafted Packaging",
            description: "Each gift is beautifully wrapped by our artisan packaging specialists",
          },
          {
            icon: Award,
            title: "Award-Winning Oils",
            description: "Our olive oils have won multiple international competitions",
          },
          {
            icon: Clock,
            title: "Flexible Scheduling",
            description: "Schedule delivery up to 6 months in advance for special occasions",
          },
          {
            icon: Gift,
            title: "Corporate Gifting",
            description: "Bulk orders and custom branding available for corporate clients",
          },
        ],
      }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-card to-[var(--matte-black)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">{content.heading}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
