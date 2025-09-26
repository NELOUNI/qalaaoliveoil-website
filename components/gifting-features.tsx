import { Shield, Truck, Heart, Award, Clock, Gift } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
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
    icon: Heart,
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
]

export function GiftingFeatures() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Why Choose Our Gifting Service</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We go above and beyond to ensure your gift creates a lasting impression
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
