import { Star, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ProductReviewsProps {
  productId: string
}

export function ProductReviews({ productId }: ProductReviewsProps) {
  // Mock reviews data - in real app, fetch from Supabase
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Absolutely exceptional quality! The flavor is rich and complex, you can truly taste the Mediterranean heritage.",
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      rating: 5,
      comment:
        "As someone from Tunisia, I can confirm this is authentic premium olive oil. Reminds me of my grandmother's cooking.",
      date: "2024-01-10",
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      rating: 4,
      comment: "Beautiful packaging and excellent taste. Perfect for gifting to food enthusiasts.",
      date: "2024-01-08",
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>

      <div className="grid gap-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
