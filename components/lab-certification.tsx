"use client"

import { useEffect } from "react"
import { Shield, Globe, Star, Leaf, Download, ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { getLabCertificationCopy } from "@/lib/i18n/lab-certification-copy"

const sectionLabelClass =
  "font-display text-[0.65rem] tracking-[0.3em] uppercase text-[var(--antique-gold)] block mb-4"
const sectionTitleClass =
  "font-serif font-light text-2xl md:text-3xl lg:text-4xl leading-tight text-[var(--antique-gold)]"
const goldRuleClass =
  "w-10 h-px bg-gradient-to-r from-transparent via-[var(--antique-gold)] to-transparent my-6"

const REVEAL_CLASS = "lab-reveal"

const TRUST_ICONS = [Shield, Globe, Star, Leaf] as const

export function LabCertification() {
  const { language } = useLanguage()
  const copy = getLabCertificationCopy(language)

  useEffect(() => {
    const els = document.querySelectorAll(`.${REVEAL_CLASS}`)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0")
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="space-y-0">
      {/* Section 1 — Hero Certification Badge */}
      <section
        id="certified"
        className="relative border-t border-b border-[var(--antique-gold)]/20 bg-[#1a1a1a] py-16 md:py-20 px-4 text-center overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(184,160,102,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-[760px] mx-auto">
          <div
            className={`${REVEAL_CLASS} inline-flex items-center gap-3 border border-[var(--antique-gold)]/40 rounded-full px-6 py-2.5 mb-10 bg-[var(--antique-gold)]/5 backdrop-blur-sm opacity-0 translate-y-7 transition-all duration-700`}
          >
            <span className="w-2 h-2 rounded-full bg-[#6BAA75] shadow-[0_0_10px_#6BAA75] animate-pulse" />
            <span className="font-display text-[0.6rem] tracking-[0.25em] text-[var(--antique-gold)]">
              {copy.badge}
            </span>
          </div>

          <h2
            className={`${REVEAL_CLASS} ${sectionTitleClass} mb-5 opacity-0 translate-y-7 transition-all duration-700 delay-100`}
          >
            {copy.certTitleBefore}
            <em className="italic text-[var(--antique-gold)]">{copy.certTitleEm}</em>
            <br />
            {copy.certTitleAfter}
          </h2>
          <p
            className={`${REVEAL_CLASS} text-[var(--antique-gold)]/70 text-sm md:text-base max-w-[520px] mx-auto mb-10 leading-relaxed opacity-0 translate-y-7 transition-all duration-700 delay-150`}
          >
            {copy.certBody}
          </p>

          <div
            className={`${REVEAL_CLASS} flex flex-wrap items-center justify-center gap-8 md:gap-10 pt-10 mt-10 border-t border-[var(--antique-gold)]/20 opacity-0 translate-y-7 transition-all duration-700 delay-200`}
          >
            {copy.trustItems.map((item, index) => {
              const Icon = TRUST_ICONS[index] ?? Shield
              return (
                <div key={item} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full border border-[var(--antique-gold)]/40 flex items-center justify-center bg-[var(--antique-gold)]/5">
                    <Icon className="w-5 h-5 text-[var(--antique-gold)]" strokeWidth={1.5} />
                  </div>
                  <small className="font-display text-[0.5rem] tracking-[0.2em] text-[var(--antique-gold)]/80 text-center max-w-[90px]">
                    {item}
                  </small>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 2 — Quality Metrics */}
      <section id="quality" className="py-16 md:py-24 px-4">
        <div className="max-w-[1100px] mx-auto">
          <div className={`${REVEAL_CLASS} text-center mb-16 opacity-0 translate-y-7 transition-all duration-700`}>
            <span className={`${sectionLabelClass} latin-numerals`} lang="en" dir="ltr">
              {copy.analysisLabel}
            </span>
            <h2 className={sectionTitleClass}>
              {copy.analysisTitleBefore}
              <br />
              <em className="italic text-[var(--antique-gold)]">{copy.analysisTitleEm}</em>
            </h2>
            <div className={goldRuleClass} />
            <p className="text-[var(--antique-gold)]/70 text-sm md:text-base max-w-[500px] mx-auto">
              {copy.analysisBody}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--antique-gold)]/20 border border-[var(--antique-gold)]/20">
            {copy.metrics.map((m, i) => (
              <div
                key={m.label}
                className={`${REVEAL_CLASS} bg-[#161410] p-6 md:p-8 relative overflow-hidden group hover:bg-[#1C1A15] transition-colors duration-300 opacity-0 translate-y-7`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[var(--antique-gold)] to-[var(--antique-gold)]/80 group-hover:w-full transition-all duration-500" />
                <span className="font-display text-[0.55rem] tracking-[0.25em] text-[var(--antique-gold)]/80 uppercase block mb-4">
                  {m.label}
                </span>
                <div className="font-serif text-3xl font-light text-[var(--antique-gold)] leading-none mb-1 latin-numerals" lang="en" dir="ltr">
                  {m.value}
                  <sup className="text-base text-[var(--antique-gold)]/70 align-super">
                    {m.sup}
                  </sup>
                </div>
                <div className="text-sm text-[var(--antique-gold)]/70 mb-4">{m.name}</div>
                <div className="h-0.5 bg-white/5 rounded mb-1 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[var(--antique-gold)]/60 to-[var(--antique-gold)] rounded transition-all duration-700"
                    style={{ width: `${m.bar}%` }}
                  />
                </div>
                <div className="text-xs text-[var(--antique-gold)]/60 latin-numerals" lang="en" dir="ltr">
                  {m.limitPrefix} ·{" "}
                  <span className="text-[#6BAA75] font-medium">{m.limitHighlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Fatty Acid Profile */}
      <section
        id="nutrition"
        className="bg-[#1a1a1a] border-t border-b border-[var(--antique-gold)]/20 py-16 md:py-24 px-4"
      >
        <div className="max-w-[1100px] mx-auto">
          <div className={`${REVEAL_CLASS} opacity-0 translate-y-7 transition-all duration-700`}>
            <span className={`${sectionLabelClass} latin-numerals`} lang="en" dir="ltr">{copy.fattyLabel}</span>
            <h2 className={sectionTitleClass}>
              {copy.fattyTitleBefore}<em className="italic text-[var(--antique-gold)]">{copy.fattyTitleEm}</em>
              <br />
              {copy.fattyTitleAfter}
            </h2>
            <div className={`${goldRuleClass} ml-0`} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 mt-12 lg:mt-16">
            <div className={`${REVEAL_CLASS} space-y-6 opacity-0 translate-y-7 transition-all duration-700`}>
              <p className="text-[var(--antique-gold)]/70 text-sm md:text-base leading-relaxed">{copy.fattyIntro1}</p>
              <p className="text-[var(--antique-gold)]/70 text-sm md:text-base leading-relaxed">{copy.fattyIntro2}</p>
              <div className="border-l border-[var(--antique-gold)]/40 pl-5 mt-8">
                <div className="font-serif text-5xl font-light text-[var(--antique-gold)] leading-none latin-numerals" lang="en" dir="ltr">
                  {copy.oleicPct}
                </div>
                <p className="text-sm text-[var(--antique-gold)]/70 mt-2 whitespace-pre-line">{copy.oleicCaption}</p>
              </div>
            </div>

            <div
              className={`${REVEAL_CLASS} flex flex-col gap-5 opacity-0 translate-y-7 transition-all duration-700 delay-150`}
            >
              {copy.fattyAcids.map((a) => (
                <div
                  key={a.name}
                  className="grid grid-cols-[1fr_auto] items-center gap-4"
                >
                  <div>
                    <div className="text-sm text-[var(--antique-gold)]/80 mb-1">
                      {a.name} <em className="italic text-[var(--antique-gold)]/60 text-xs">· {a.sub}</em>
                    </div>
                    <div className="h-1 bg-white/5 rounded overflow-hidden">
                      <div
                        className={`h-full rounded ${
                          a.type === "primary"
                            ? "bg-gradient-to-r from-[var(--antique-gold)]/60 to-[var(--antique-gold)]"
                            : a.type === "secondary"
                              ? "bg-gradient-to-r from-[var(--sage-olive)] to-[var(--sage-olive)]/80"
                              : "bg-[var(--antique-gold)]/30"
                        }`}
                        style={{ width: `${Math.max(a.bar, 2)}%` }}
                      />
                    </div>
                  </div>
                  <div className="font-serif text-xl font-light text-[var(--antique-gold)] whitespace-nowrap min-w-[65px] text-right latin-numerals" lang="en" dir="ltr">
                    {a.pct}
                    <sup className="text-xs text-[var(--antique-gold)]/60 align-super">%</sup>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Authenticity & Purity */}
      <section id="purity" className="py-16 md:py-24 px-4">
        <div className="max-w-[1100px] mx-auto">
          <div className={`${REVEAL_CLASS} opacity-0 translate-y-7 transition-all duration-700`}>
            <span className={sectionLabelClass}>{copy.purityLabel}</span>
            <h2 className={sectionTitleClass}>
              <em className="italic text-[var(--antique-gold)]">{copy.purityTitleEm}</em> {copy.purityTitleLine2}
              <br />
              {copy.purityTitleLine3}
            </h2>
            <div className={`${goldRuleClass} ml-0`} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 mt-12 lg:mt-16">
            <div className="flex flex-col gap-6">
              {copy.purityChecks.map((check, i) => (
                <div
                  key={check.title}
                  className={`${REVEAL_CLASS} flex gap-5 items-start p-6 border border-[var(--antique-gold)]/20 bg-[#161410] hover:border-[var(--antique-gold)]/40 transition-colors opacity-0 translate-y-7`}
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="w-9 h-9 rounded-full bg-[#6BAA75]/10 border border-[#6BAA75]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6BAA75"
                      strokeWidth={2}
                      className="w-4 h-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-normal text-[var(--antique-gold)] mb-1">
                      {check.title}
                    </h4>
                    <p className="text-sm text-[var(--antique-gold)]/70 leading-relaxed">
                      {check.text}
                    </p>
                    <span className="inline-block mt-2 font-display text-[0.55rem] tracking-[0.2em] px-3 py-1 bg-[#6BAA75]/10 border border-[#6BAA75]/25 text-[#6BAA75]">
                      {check.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className={`${REVEAL_CLASS} space-y-6 opacity-0 translate-y-7 transition-all duration-700 delay-200`}>
              <div className="border border-[var(--antique-gold)]/40 p-8 bg-[var(--antique-gold)]/5 relative">
                <span
                  className="absolute top-0 left-4 font-serif text-8xl text-[var(--antique-gold)]/10 leading-none"
                  aria-hidden
                >
                  &quot;
                </span>
                <blockquote className="font-serif italic text-lg md:text-xl text-[var(--antique-gold)]/90 leading-relaxed mb-6 relative z-10">
                  {copy.quote}
                </blockquote>
                <div className="font-display text-[0.55rem] tracking-[0.2em] text-[var(--antique-gold)]/70">
                  {copy.quoteAttribution}
                </div>
              </div>
              <div className="p-6 border border-[var(--antique-gold)]/20 bg-[#161410]">
                <div className="text-sm text-[var(--antique-gold)]/70 mb-1">{copy.sitosterolLabel}</div>
                <div className="font-serif text-4xl text-[var(--antique-gold)] leading-none">
                  94.5<span className="text-2xl text-[var(--antique-gold)]/60">%</span>
                </div>
                <div className="font-display text-[0.52rem] tracking-[0.18em] text-[#6BAA75] mt-1">{copy.sitosterolThreshold}</div>
<p className="mt-4 text-sm text-[var(--antique-gold)]/70 leading-relaxed">{copy.sitosterolBody}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Traceability */}
      <section
        id="traceability"
        className="bg-[#1a1a1a] border-t border-[var(--antique-gold)]/20 py-16 md:py-24 px-4"
      >
        <div className="max-w-[1100px] mx-auto">
          <div className={`${REVEAL_CLASS} opacity-0 translate-y-7 transition-all duration-700`}>
            <span className={sectionLabelClass}>{copy.traceLabel}</span>
            <h2 className={sectionTitleClass}>
              {copy.traceTitleBefore}
              <br />
              <em className="italic text-[var(--antique-gold)]">{copy.traceTitleEm}</em>
            </h2>
            <div className={`${goldRuleClass} ml-0`} />
            <p className="text-[var(--antique-gold)]/70 text-sm md:text-base max-w-[520px] leading-relaxed">
              {copy.traceBody}
            </p>
          </div>

          <div
            className={`${REVEAL_CLASS} grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--antique-gold)]/20 border border-[var(--antique-gold)]/20 mt-12 opacity-0 translate-y-7 transition-all duration-700 delay-100`}
          >
            {copy.traceCells.map((cell) => (
              <div key={cell.label} className="bg-[#161410] p-6">
                <span className="font-display text-[0.52rem] tracking-[0.22em] text-[var(--antique-gold)]/70 block mb-2">
                  {cell.label}
                </span>
                <div className="font-serif text-lg md:text-xl text-[var(--antique-gold)] latin-numerals" lang="en" dir="ltr">
                  {cell.value}
                </div>
              </div>
            ))}
          </div>

          <div
            className={`${REVEAL_CLASS} flex flex-wrap items-center gap-6 mt-10 opacity-0 translate-y-7 transition-all duration-700 delay-200`}
          >
            <a
              href="/TLHP26-000264_F.pdf"
              download="TLHP26-000264_F.pdf"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-[var(--antique-gold)]/60 text-[var(--antique-gold)] font-display text-[0.62rem] tracking-[0.2em] uppercase bg-[var(--antique-gold)]/5 hover:bg-[var(--antique-gold)]/10 hover:border-[var(--antique-gold)] transition-colors"
            >
              <Download className="w-3.5 h-3.5" strokeWidth={2} />
              {copy.downloadReport}
            </a>
            <a
              href="https://www.internationaloliveoil.org/what-we-do/chemistry-standardisation-unit/approved-laboratories/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-[var(--antique-gold)]/20 text-[var(--antique-gold)]/70 font-display text-[0.62rem] tracking-[0.2em] uppercase bg-transparent hover:border-[var(--antique-gold)]/50 hover:text-[var(--antique-gold)] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
              {copy.verifyLab}
            </a>
          </div>

          <p
            className={`${REVEAL_CLASS} mt-8 text-xs text-[var(--antique-gold)]/60 pl-4 border-l border-[var(--antique-gold)]/20 leading-relaxed max-w-[680px] opacity-0 translate-y-7 transition-all duration-700 delay-300`}
          >
{copy.footerLegal}
          </p>
        </div>
      </section>
    </div>
  )
}
