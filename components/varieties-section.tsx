"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "./language-provider"

const T = {
  gold: "#C9A84C",
  goldLight: "#E8C97A",
  goldDim: "#8A6E32",
  cream: "#F5EDD8",
  creamDim: "#D4C9A8",
  dark: "#0E0D0B",
  darkMid: "#1A1814",
  darkCard: "#161410",
  border: "rgba(201,168,76,0.18)",
  borderStrong: "rgba(201,168,76,0.40)",
  textMain: "#E8E0CE",
  textDim: "#9B9180",
  chetoui: "#8B9E6B",
  chemlali: "#C9A84C",
}

function TasteBar({
  label,
  value,
  color,
  animate,
}: {
  label: string
  value: number
  color: string
  animate: boolean
}) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.4rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.78rem",
            letterSpacing: "0.2em",
            color: T.textDim,
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        <span
          className="latin-numerals"
          lang="en"
          dir="ltr"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1rem",
            color,
          }}
        >
          {value}%
        </span>
      </div>
      <div
        style={{
          height: "2px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: animate ? `${value}%` : "0%",
            background: `linear-gradient(90deg, ${color}66, ${color})`,
            borderRadius: "2px",
            transition: "width 1.1s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>
    </div>
  )
}

function NoteChip({ label, color }: { label: string; color: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
        fontFamily: "'Cinzel', serif",
        fontSize: "0.75rem",
        letterSpacing: "0.18em",
        color,
        padding: "0.35rem 0.75rem",
        border: `1px solid ${color}33`,
        background: `${color}08`,
        marginRight: "0.4rem",
        marginBottom: "0.4rem",
      }}
    >
      <span
        style={{
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: color,
          flexShrink: 0,
        }}
      />
      {label}
    </span>
  )
}

interface Variety {
  id: string
  name: string
  arabic: string
  color: string
  character: string
  origin: string
  region: string
  regionAr?: string
  description: string
  detail: string
  notes: string[]
  profile: { fruitiness: number; bitterness: number; pungency: number }
  harvest: string
  polyphenols: string
  bestFor: string
}

const LABELS = {
  en: {
    tastingNotes: "TASTING NOTES",
    tasteProfile: "TASTE PROFILE",
    fruitiness: "Fruitiness",
    bitterness: "Bitterness",
    pungency: "Pungency",
    harvest: "Harvest",
    polyphenols: "Polyphenols",
    bestFor: "Best For",
    region: "Region",
  },
  ar: {
    tastingNotes: "نوتات التذوق",
    tasteProfile: "ملف التذوق",
    fruitiness: "فواكيه",
    bitterness: "مرارة",
    pungency: "لاذعية",
    harvest: "الحصاد",
    polyphenols: "البوليفينول",
    bestFor: "الأفضل لـ",
    region: "المنطقة",
  },
}

function VarietyCard({
  variety,
  animate,
  regionDisplay,
  language,
}: {
  variety: Variety & { ar?: VarietyAr }
  animate: boolean
  regionDisplay: string
  language: "en" | "ar"
}) {
  const isChetoui = variety.id === "chetoui"
  const v = language === "ar" && variety.ar ? { ...variety, ...variety.ar } : variety
  const labels = LABELS[language]

  return (
    <div
      style={{
        background: T.darkCard,
        border: `1px solid ${T.border}`,
        position: "relative",
        overflow: "hidden",
        flex: 1,
      }}
    >
      <div
        style={{
          height: "3px",
          background: `linear-gradient(90deg, transparent, ${variety.color}, transparent)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          right: isChetoui ? "auto" : "1.5rem",
          left: isChetoui ? "1.5rem" : "auto",
          fontFamily: "'Cinzel', serif",
          fontSize: "0.75rem",
          letterSpacing: "0.2em",
          color: variety.color,
          padding: "0.3rem 0.65rem",
          border: `1px solid ${variety.color}33`,
          background: `${variety.color}0A`,
        }}
      >
        {v.character}
      </div>

      <div style={{ padding: "3.5rem 2.5rem 2.5rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
              fontWeight: 300,
              color: T.cream,
              lineHeight: 1,
              marginBottom: "0.3rem",
            }}
          >
            {variety.name}
          </div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: `${variety.color}66`,
              marginBottom: "0.6rem",
            }}
          >
            {variety.arabic}
          </div>
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.78rem",
              letterSpacing: "0.22em",
              color: T.textDim,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <svg
              width="9"
              height="9"
              viewBox="0 0 24 24"
              fill="none"
              stroke={variety.color}
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {v.origin}
          </div>
        </div>

        <div
          style={{
            height: "1px",
            background: T.border,
            marginBottom: "2rem",
          }}
        />

        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.15rem",
            fontStyle: "italic",
            color: T.creamDim,
            lineHeight: 1.75,
            marginBottom: "1.5rem",
          }}
        >
          &quot;{v.description}&quot;
        </p>

        <p
          style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontWeight: 300,
            fontSize: "0.95rem",
            color: T.textDim,
            lineHeight: 1.85,
            marginBottom: "2rem",
          }}
        >
          {v.detail}
        </p>

        <div style={{ marginBottom: "2rem", minHeight: "6.5rem" }}>
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.78rem",
              letterSpacing: "0.22em",
              color: variety.color,
              marginBottom: "0.8rem",
            }}
          >
            {labels.tastingNotes}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {v.notes.map((n) => (
              <NoteChip key={n} label={n} color={variety.color} />
            ))}
          </div>
        </div>

        <div
          style={{
            height: "1px",
            background: T.border,
            marginBottom: "2rem",
          }}
        />

        <div style={{ marginBottom: "2rem", minHeight: "8.5rem" }}>
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.78rem",
              letterSpacing: "0.22em",
              color: variety.color,
              marginBottom: "1.2rem",
            }}
          >
            {labels.tasteProfile}
          </div>
          <TasteBar
            label={labels.fruitiness}
            value={variety.profile.fruitiness}
            color={variety.color}
            animate={animate}
          />
          <TasteBar
            label={labels.bitterness}
            value={variety.profile.bitterness}
            color={variety.color}
            animate={animate}
          />
          <TasteBar
            label={labels.pungency}
            value={variety.profile.pungency}
            color={variety.color}
            animate={animate}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
          }}
        >
          {[
            { rowKey: "harvest", label: labels.harvest, value: v.harvest },
            { rowKey: "polyphenols", label: labels.polyphenols, value: v.polyphenols },
            { rowKey: "bestFor", label: labels.bestFor, value: v.bestFor },
            { rowKey: "region", label: labels.region, value: regionDisplay },
          ].map((item) => (
            <div
              key={item.rowKey}
              style={{
                padding: "0.8rem",
                border: `1px solid ${T.border}`,
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  color: T.textDim,
                  marginBottom: "0.3rem",
                }}
              >
                {item.label}
              </div>
              <div
                className={item.rowKey === "region" ? undefined : "latin-numerals"}
                lang={item.rowKey === "region" ? undefined : "en"}
                dir={item.rowKey === "region" ? undefined : "ltr"}
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: T.textMain,
                  fontWeight: 400,
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface VarietyAr {
  character: string
  origin: string
  description: string
  detail: string
  notes: string[]
  harvest: string
  polyphenols: string
  bestFor: string
}

const VARIETIES: (Variety & { ar?: VarietyAr })[] = [
  {
    id: "chetoui",
    name: "Chetoui",
    arabic: "شتوي",
    color: T.chetoui,
    character: "Bold & Intense",
    origin: "Northern Tunisia · Bizerte & Béja",
    region: "North Tunisia",
    regionAr: "شمال تونس",
    description: "The oil that announces itself — grassy, sharp, alive.",
    detail:
      "A bold character with a vivid green aroma, a sharp peppery bite, and a warm finish that sparks at the back of the throat. That signature tingle is the olive's way of telling you it's real — a natural sign of richness and freshness. Best enjoyed raw, poured generously over any dish.",
    notes: [
      "Fresh-cut grass",
      "Green tomato",
      "Black pepper",
      "Bitter almond",
      "Wild herb",
    ],
    profile: { fruitiness: 85, bitterness: 90, pungency: 95 },
    harvest: "Oct – Nov · Early",
    polyphenols: "Very High",
    bestFor: "Raw drizzle, dipping",
    ar: {
      character: "قوي ومكثّف",
      origin: "شمال تونس · بنزرت وباجة",
      description: "زيت يعلن عن نفسه — عشبي، لاذع، حي.",
      detail:
        "شخصية جريئة برائحة خضراء نضرة، ولسعة فلفلية، ونهاية دافئة تشتعل في مؤخرة الحلق. ذلك الوخز المميز هو طريقة الزيتون ليقول لكم إنه حقيقي — علامة طبيعية على الغنى والنضارة. يُستساغ نيئاً، يُسكب بوفرة على أي طبق.",
      notes: ["عشب طازج", "طماطم خضراء", "فلفل أسود", "لوز مر", "عشب بري"],
      harvest: "أكتوبر – نوفمبر · مبكر",
      polyphenols: "عالي جداً",
      bestFor: "سكب نيء، تغميس",
    },
  },
  {
    id: "chemlali",
    name: "Chemlali",
    arabic: "شملالي",
    color: T.chemlali,
    character: "Elegant & Refined",
    origin: "Central & Southern Tunisia · Sousse & Sfax",
    region: "Center and South of Tunisia",
    regionAr: "وسط وجنوب تونس",
    description:
      "Soft, golden, effortless — Tunisia's most beloved variety.",
    detail:
      "Gentle and welcoming, with notes of ripe almond, artichoke, and wildflower, rounding off with a soft buttery warmth that lingers on the palate. Tunisia's most widely cultivated variety — cherished across generations for its balance, warmth, and quiet confidence that elevates any meal.",
    notes: [
      "Ripe almond",
      "Artichoke",
      "Wildflower",
      "Soft butter",
      "Dried fig",
    ],
    profile: { fruitiness: 75, bitterness: 45, pungency: 50 },
    harvest: "Nov – Dec · Mid",
    polyphenols: "Medium–High",
    bestFor: "Cooking, finishing, baking",
    ar: {
      character: "أنيق وناعم",
      origin: "وسط وجنوب تونس · سوسة وصفاقس",
      description: "ناعم، ذهبي، بلا جهد — الصنف الأكثر حباً في تونس.",
      detail:
        "لطيف ومرحب، بنوتات لوز ناضج وخرشوف وزهر بري، ينتهي بدفء زبدي ناعم يبقى في الحنك. الصنف الأكثر زراعة في تونس — يُعتز به عبر الأجيال لتوازنه ودفئه وثقته الهادئة التي ترفع أي وجبة.",
      notes: ["لوز ناضج", "خرشوف", "زهر بري", "زبدة ناعمة", "تين مجفف"],
      harvest: "نوفمبر – ديسمبر · منتصف",
      polyphenols: "متوسط–عالي",
      bestFor: "طبخ، إنهاء، خبز",
    },
  },
]

export function VarietiesSection() {
  const { language } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [animate, setAnimate] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
          setTimeout(() => setAnimate(true), 400)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: T.darkMid,
        borderTop: `1px solid ${T.border}`,
        borderBottom: `1px solid ${T.border}`,
        padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.6rem",
              letterSpacing: "0.35em",
              color: T.cream,
              display: "block",
              marginBottom: "1rem",
              textTransform: "uppercase",
            }}
          >
            {language === "ar" ? "الأصناف · تعرّف على زيتك" : "The Varieties · Know Your Oil"}
          </span>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              color: T.cream,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            {language === "ar" ? "روحان من تونس" : "Two Souls of Tunisia"}
          </h2>

          <div
            style={{
              width: "40px",
              height: "1px",
              background: `linear-gradient(90deg, transparent, ${T.gold}, transparent)`,
              margin: "0 auto 1.5rem",
            }}
          />

          <p
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.93rem",
              color: T.textDim,
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.85,
            }}
          >
            {language === "ar"
              ? "قلعة تختار من أصناف تونس الأصيلة الأشهر. كل صنف يضيف شخصيته للمزيج — ولطاولتك."
              : "Qalaa sources from two of Tunisia's most celebrated indigenous varieties. Each brings its own character to the blend — and to your table."}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: 0,
            position: "relative",
          }}
        >
          <div
            className="flex flex-col md:flex-row gap-[1.5px] w-full"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(32px)",
              transition:
                "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
            }}
          >
            {VARIETIES.map((v) => (
              <VarietyCard
                key={v.id}
                variety={v}
                animate={animate}
                regionDisplay={language === "ar" && v.regionAr ? v.regionAr : v.region}
                language={language}
              />
            ))}
          </div>

          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "42px",
              height: "42px",
              background: T.darkMid,
              border: `1px solid ${T.borderStrong}`,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              opacity: animate ? 1 : 0,
              transition: "opacity 0.5s ease 0.8s",
            }}
          >
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.5rem",
                letterSpacing: "0.1em",
                color: T.gold,
              }}
            >
              VS
            </span>
          </div>
        </div>

        <div
          style={{
            marginTop: "3rem",
            padding: "1.5rem 2rem",
            border: `1px solid ${T.border}`,
            background: "rgba(201,168,76,0.03)",
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            opacity: animate ? 1 : 0,
            transition: "opacity 0.9s ease 0.5s",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={T.goldDim}
            strokeWidth="1.5"
            style={{ flexShrink: 0, marginTop: "2px" }}
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.8rem",
              color: T.textDim,
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            <strong
              style={{ color: T.creamDim, fontWeight: 400 }}
            >
              {language === "ar" ? "عن مزيجنا:" : "About our blend:"}
            </strong>{" "}
            {language === "ar"
              ? "زيوت قلعة تُصنع بموازنة دقيقة بين قوة البوليفينول في الشتوي ونعومة الشملالي — فينتج زيت مركّب وسهل التقديم دون تنازل عن أي من الشخصيتين. كل موسم حصاد قد يغيّر التوازن قليلاً، يعكس تعبير الموسم."
              : "Qalaa oils are crafted by carefully balancing Chetoui's bold polyphenol intensity with Chemlali's refined softness — resulting in an oil that is both complex and approachable, without compromising on either character. Each harvest may shift the balance slightly, reflecting the season's expression."}
          </p>
        </div>
      </div>
    </section>
  )
}
