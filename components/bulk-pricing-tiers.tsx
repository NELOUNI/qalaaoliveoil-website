import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingDown, Package, Award, Truck } from "lucide-react"

const pricingTiers = [
  {
    name: "Standard",
    minQuantity: 50,
    maxQuantity: 199,
    discount: 0,
    features: ["Bulk pricing", "Standard shipping", "Basic support"],
    color: "bg-gray-100 text-gray-800",
  },
  {
    name: "Volume",
    minQuantity: 200,
    maxQuantity: 499,
    discount: 5,
    features: ["5% volume discount", "Priority shipping", "Dedicated support"],
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "Enterprise",
    minQuantity: 500,
    maxQuantity: 999,
    discount: 10,
    features: ["10% volume discount", "Free shipping", "Account manager"],
    color: "bg-amber-100 text-amber-800",
  },
  {
    name: "Corporate",
    minQuantity: 1000,
    maxQuantity: null,
    discount: 15,
    features: ["15% volume discount", "White-glove delivery", "Custom packaging"],
    color: "bg-green-100 text-green-800",
  },
]

const benefits = [
  {
    icon: TrendingDown,
    title: "Volume Discounts",
    description: "Save up to 15% on large orders",
  },
  {
    icon: Package,
    title: "Custom Packaging",
    description: "Branded packaging for corporate gifts",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee on all orders",
  },
  {
    icon: Truck,
    title: "Flexible Delivery",
    description: "Scheduled delivery to multiple locations",
  },
]

export function BulkPricingTiers() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-green-600" />
            Volume Pricing Tiers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">{tier.name}</h3>
                <Badge className={tier.color}>{tier.discount > 0 ? `${tier.discount}% OFF` : "Standard"}</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                {tier.minQuantity}
                {tier.maxQuantity ? `-${tier.maxQuantity}` : "+"} bottles
              </p>
              <ul className="space-y-1">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Corporate Benefits</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">{benefit.title}</h4>
                  <p className="text-xs text-gray-600">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}
