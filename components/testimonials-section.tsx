"use client"

import { useLanguage } from "./language-provider"

export function TestimonialsSection() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: "Chef Ahmed Mansouri",
      title: "Michelin Star Restaurant, Tunis",
      quote:
        "Qalaa's olive oil transforms every dish. The depth of flavor from their ancient groves is unmatched in Mediterranean cuisine.",
      rating: 5,
    },
    {
      name: "Sarah Al-Rashid",
      title: "Food Critic, Gulf Times",
      quote:
        "This is not just olive oil - it's liquid gold. The heritage and quality in every drop makes Qalaa exceptional.",
      rating: 5,
    },
    {
      name: "Marco Benedetti",
      title: "Italian Culinary Institute",
      quote:
        "Having tasted oils from across the Mediterranean, Qalaa stands among the finest. Truly artisanal quality.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">Trusted by Culinary Masters</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Discover why renowned chefs and food critics choose Qalaa for their finest creations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-stone-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</blockquote>
              <div className="border-t border-stone-200 pt-4">
                <div className="font-semibold text-stone-900">{testimonial.name}</div>
                <div className="text-sm text-stone-600">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
