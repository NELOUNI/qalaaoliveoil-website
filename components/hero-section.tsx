"use client"

const HERO_VIDEO_SRC = "/hero-video.mp4"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Qalaa Premium Olive Oil - Ancient Tunisian Heritage"
          poster="/tunisian-olive-grove-hero.webp"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-[var(--antique-gold)]/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[var(--antique-gold)] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
