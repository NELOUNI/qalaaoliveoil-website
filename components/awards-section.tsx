"use client"

export function AwardsSection() {
  const certifications = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
        </svg>
      ),
      lines: ["ISO/IEC", "17025:2017", "ACCREDITED"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      lines: ["INTERNATIONAL", "OLIVE COUNCIL", "APPROVED LAB"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      lines: ["COI/T.15/NC N°3", "RÉV.21-2025", "COMPLIANT"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M17 8C8 10 5.9 16.17 3.82 19.34 3.82 19.34 9 20 12 16c0 0 3.07 4-2 6 0 0 10-3 10-12 0-3.5-3-10-3-10z" />
        </svg>
      ),
      lines: ["SGS TUNISIA", "REPORT No.", "TLHP26-000264"],
    },
  ]

  return (
    <section className="py-20 bg-[var(--matte-black)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-[var(--antique-gold)] mb-4">
            Awards &amp; Certification
          </h2>
          <p className="text-lg text-[var(--antique-gold)]/80 max-w-2xl mx-auto">
            Independently verified by SGS Tunisia — one of the world&apos;s leading inspection bodies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 text-center group"
            >
              <div className="w-16 h-16 rounded-full border border-[var(--antique-gold)]/40 bg-[var(--antique-gold)]/5 flex items-center justify-center text-[var(--antique-gold)] group-hover:border-[var(--antique-gold)]/60 transition-colors">
                {cert.icon}
              </div>
              <div className="space-y-0.5">
                {cert.lines.map((line, i) => (
                  <div
                    key={i}
                    className="text-[var(--antique-gold)] font-medium text-sm tracking-wide"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
