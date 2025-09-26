"use client"

import { useLanguage } from "./language-provider"

export function AwardsSection() {
  const { t } = useLanguage()

  const awards = [
    {
      title: "Gold Medal",
      organization: "International Olive Oil Competition",
      year: "2024",
      description: "Best Extra Virgin Olive Oil - Mediterranean Region",
    },
    {
      title: "Organic Certification",
      organization: "ECOCERT Tunisia",
      year: "2023",
      description: "Certified Organic Production Standards",
    },
    {
      title: "Heritage Award",
      organization: "Tunisian Ministry of Agriculture",
      year: "2023",
      description: "Traditional Olive Growing Excellence",
    },
    {
      title: "Quality Excellence",
      organization: "Mediterranean Food Institute",
      year: "2024",
      description: "Superior Taste and Purity Standards",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">Awards & Certifications</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Recognition of our commitment to excellence and traditional craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-stone-900 mb-2">{award.title}</h3>
              <p className="text-sm text-amber-600 font-medium mb-2">{award.organization}</p>
              <p className="text-xs text-stone-500 mb-3">{award.year}</p>
              <p className="text-sm text-stone-600 leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
