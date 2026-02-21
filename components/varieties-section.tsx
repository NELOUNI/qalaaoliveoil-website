"use client"

import { useEffect, useRef, useState } from "react"

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
            fontSize: "0.52rem",
            letterSpacing: "0.2em",
            color: T.textDim,
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.9rem",
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
        fontSize: "0.48rem",
        letterSpacing: "0.18em",
        color,
        padding: "0.3rem 0.7rem",
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
  description: string
  detail: string
  notes: string[]
  profile: { fruitiness: number; bitterness: number; pungency: number }
  harvest: string
  polyphenols: string
  bestFor: string
}

function VarietyCard({ variety, animate }: { variety: Variety; animate: boolean }) {
  const isChetoui = variety.id === "chetoui"

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
          fontSize: "0.48rem",
          letterSpacing: "0.2em",
          color: variety.color,
          padding: "0.25rem 0.6rem",
          border: `1px solid ${variety.color}33`,
          background: `${variety.color}0A`,
        }}
      >
        {variety.character}
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
              fontSize: "0.5rem",
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
            {variety.origin}
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
            fontSize: "1.12rem",
            fontStyle: "italic",
            color: T.creamDim,
            lineHeight: 1.75,
            marginBottom: "1.5rem",
          }}
        >
          &quot;{variety.description}&quot;
        </p>

        <p
          style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontWeight: 300,
            fontSize: "0.82rem",
            color: T.textDim,
            lineHeight: 1.85,
            marginBottom: "2rem",
          }}
        >
          {variety.detail}
        </p>

        <div style={{ marginBottom: "2rem", minHeight: "6.5rem" }}>
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.5rem",
              letterSpacing: "0.22em",
              color: variety.color,
              marginBottom: "0.8rem",
            }}
          >
            TASTING NOTES
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {variety.notes.map((n) => (
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
              fontSize: "0.5rem",
              letterSpacing: "0.22em",
              color: variety.color,
              marginBottom: "1.2rem",
            }}
          >
            TASTE PROFILE
          </div>
          <TasteBar
            label="Fruitiness"
            value={variety.profile.fruitiness}
            color={variety.color}
            animate={animate}
          />
          <TasteBar
            label="Bitterness"
            value={variety.profile.bitterness}
            color={variety.color}
            animate={animate}
          />
          <TasteBar
            label="Pungency"
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
            { label: "Harvest", value: variety.harvest },
            { label: "Polyphenols", value: variety.polyphenols },
            { label: "Best For", value: variety.bestFor },
            { label: "Region", value: variety.region },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: "0.8rem",
                border: `1px solid ${T.border}`,
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.44rem",
                  letterSpacing: "0.18em",
                  color: T.textDim,
                  marginBottom: "0.3rem",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: "0.75rem",
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

const VARIETIES: Variety[] = [
  {
    id: "chetoui",
    name: "Chetoui",
    arabic: "شتوي",
    color: T.chetoui,
    character: "Bold & Intense",
    origin: "Northern Tunisia · Bizerte & Béja",
    region: "North Tunisia",
    description: "The oil that announces itself — grassy, sharp, alive.",
    detail:
      "Intensely grassy and peppery with a sharp, bitter bite and a lingering spicy finish. The hallmark catch at the back of the throat is a sign of high polyphenols — nature's signal of exceptional freshness and antioxidant richness. Best experienced raw, drizzled.",
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
  },
  {
    id: "chemlali",
    name: "Chemlali",
    arabic: "شملالي",
    color: T.chemlali,
    character: "Elegant & Refined",
    origin: "Central & Southern Tunisia · Sfax",
    region: "South Tunisia",
    description:
      "Soft, golden, effortless — Tunisia's most beloved expression.",
    detail:
      "Soft and approachable with delicate almond and artichoke notes, gentle fruitiness, and a smooth, buttery finish that lingers gracefully. Tunisia's most widely cultivated variety — universally loved for its balance, warmth, and quiet elegance at the table.",
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
  },
]

export function VarietiesSection() {
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
              color: T.gold,
              display: "block",
              marginBottom: "1rem",
              textTransform: "uppercase",
            }}
          >
            The Varieties · Know Your Oil
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
            Two Souls of{" "}
            <em style={{ fontStyle: "italic", color: T.goldLight }}>Tunisia</em>
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
            Qalaa sources from two of Tunisia&apos;s most celebrated indigenous
            varieties. Each brings its own character to the blend — and to your
            table.
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
              <VarietyCard key={v.id} variety={v} animate={animate} />
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
              About our blend:
            </strong>{" "}
            Qalaa oils are crafted by carefully balancing Chetoui&apos;s bold
            polyphenol intensity with Chemlali&apos;s refined softness —
            resulting in an oil that is both complex and approachable, without
            compromising on either character. Each harvest may shift the balance
            slightly, reflecting the season&apos;s expression.
          </p>
        </div>
      </div>
    </section>
  )
}
