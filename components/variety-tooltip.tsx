"use client"

import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"

const VARIETY_DATA: Record<
  string,
  {
    name: string
    arabic: string
    origin: string
    character: string
    taste: string
    notes: string[]
    profile: { fruitiness: number; bitterness: number; pungency: number }
    harvest: string
    polyphenols: string
    color: string
  }
> = {
  chetoui: {
    name: "Chetoui",
    arabic: "شتوي",
    origin: "Northern Tunisia · Bizerte & Béja",
    character: "Bold & Intense",
    taste:
      "Intensely grassy and peppery with a sharp, bitter bite and a lingering spicy finish. The hallmark catch at the back of the throat is a sign of high polyphenols — nature's signal of exceptional freshness and antioxidant richness. Best experienced raw, drizzled.",
    notes: ["Fresh-cut grass", "Green tomato", "Black pepper", "Bitter almond"],
    profile: { fruitiness: 85, bitterness: 90, pungency: 95 },
    harvest: "Early harvest · October–November",
    polyphenols: "Very High",
    color: "#8B9E6B",
  },
  chemlali: {
    name: "Chemlali",
    arabic: "شملالي",
    origin: "Central & Southern Tunisia · Sfax",
    character: "Elegant & Refined",
    taste:
      "Soft and approachable with delicate almond and artichoke notes, gentle fruitiness, and a smooth, buttery finish. Tunisia's most beloved variety — balanced and effortlessly versatile.",
    notes: ["Ripe almond", "Artichoke", "Wildflower", "Soft butter"],
    profile: { fruitiness: 75, bitterness: 45, pungency: 50 },
    harvest: "Mid harvest · November–December",
    polyphenols: "Medium–High",
    color: "#C9A84C",
  },
}

function ProfileBar({
  label,
  value,
  color,
}: {
  label: string
  value: number
  color: string
}) {
  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.25rem",
          fontFamily: "'Cinzel', serif",
          fontSize: "0.48rem",
          letterSpacing: "0.18em",
          color: "rgba(180,165,130,0.7)",
          textTransform: "uppercase",
        }}
      >
        <span>{label}</span>
        <span style={{ color }}>{value}%</span>
      </div>
      <div
        style={{
          height: "1.5px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${value}%`,
            background: `linear-gradient(90deg, ${color}66, ${color})`,
            borderRadius: "2px",
            transition: "width 0.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>
    </div>
  )
}

const TOOLTIP_HEIGHT_ESTIMATE = 420

function TooltipPanel({
  variety,
  visible,
  placement,
  triggerRect,
}: {
  variety: "chetoui" | "chemlali"
  visible: boolean
  placement: "top" | "bottom"
  triggerRect: DOMRect | null
}) {
  const data = VARIETY_DATA[variety]
  if (!data) return null

  const isTop = placement === "top"
  const centerX = triggerRect ? triggerRect.left + triggerRect.width / 2 : window?.innerWidth ? window.innerWidth / 2 : "50%"
  const top = triggerRect
    ? isTop
      ? triggerRect.top - TOOLTIP_HEIGHT_ESTIMATE - 14
      : triggerRect.bottom + 14
    : 0

  const leftNum = typeof centerX === "number" ? centerX : undefined
  const leftClamped =
    leftNum !== undefined && typeof window !== "undefined"
      ? Math.max(150, Math.min(window.innerWidth - 150, leftNum))
      : leftNum ?? "50%"

  return (
    <div
      style={{
        position: "fixed",
        left: leftClamped,
        top: triggerRect ? top : 0,
        transform: `translateX(-50%) ${visible ? "translateY(0)" : `translateY(${isTop ? "8px" : "-8px"})`}`,
        width: "300px",
        maxWidth: "min(300px, calc(100vw - 24px))",
        background: "#0E0D0B",
        border: "1px solid rgba(201,168,76,0.3)",
        boxShadow:
          "0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.08) inset",
        zIndex: 99999,
        pointerEvents: visible ? "auto" : "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.25s ease, transform 0.25s ease",
      }}
    >
      {/* Arrow */}
      <div
        style={{
          position: "absolute",
          [isTop ? "bottom" : "top"]: "-5px",
          left: "50%",
          transform: `translateX(-50%) rotate(${isTop ? "225deg" : "45deg"})`,
          width: "9px",
          height: "9px",
          background: "#0E0D0B",
          borderRight: "1px solid rgba(201,168,76,0.3)",
          borderBottom: "1px solid rgba(201,168,76,0.3)",
        }}
      />

      {/* Gold top accent */}
      <div
        style={{
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${data.color}, transparent)`,
        }}
      />

      <div style={{ padding: "1.4rem" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.5rem",
                letterSpacing: "0.25em",
                color: data.color,
                marginBottom: "0.3rem",
                textTransform: "uppercase",
              }}
            >
              {data.character}
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.5rem",
                fontWeight: 300,
                color: "#F5EDD8",
                lineHeight: 1,
              }}
            >
              {data.name}
            </div>
          </div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
              color: "rgba(201,168,76,0.25)",
              fontStyle: "italic",
              lineHeight: 1,
            }}
          >
            {data.arabic}
          </div>
        </div>

        {/* Origin pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.25rem 0.6rem",
            border: "1px solid rgba(201,168,76,0.15)",
            marginBottom: "1rem",
          }}
        >
          <svg
            width="8"
            height="8"
            viewBox="0 0 24 24"
            fill="none"
            stroke={data.color}
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.45rem",
              letterSpacing: "0.18em",
              color: "rgba(180,165,130,0.7)",
            }}
          >
            {data.origin}
          </span>
        </div>

        {/* Taste description */}
        <p
          style={{
            fontSize: "0.75rem",
            color: "rgba(180,165,130,0.8)",
            lineHeight: 1.75,
            marginBottom: "1rem",
            fontFamily: "'Instrument Sans', sans-serif",
            fontWeight: 300,
          }}
        >
          {data.taste}
        </p>

        {/* Tasting notes */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.35rem",
            marginBottom: "1rem",
          }}
        >
          {data.notes.map((note) => (
            <span
              key={note}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.42rem",
                letterSpacing: "0.15em",
                color: data.color,
                padding: "0.2rem 0.5rem",
                border: `1px solid ${data.color}33`,
                background: `${data.color}0A`,
              }}
            >
              {note}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(201,168,76,0.1)",
            marginBottom: "1rem",
          }}
        />

        {/* Taste profile bars */}
        <ProfileBar
          label="Fruitiness"
          value={data.profile.fruitiness}
          color={data.color}
        />
        <ProfileBar
          label="Bitterness"
          value={data.profile.bitterness}
          color={data.color}
        />
        <ProfileBar
          label="Pungency"
          value={data.profile.pungency}
          color={data.color}
        />

        {/* Footer meta */}
        <div
          style={{
            marginTop: "1rem",
            paddingTop: "0.75rem",
            borderTop: "1px solid rgba(201,168,76,0.1)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.42rem",
              letterSpacing: "0.15em",
              color: "rgba(180,165,130,0.5)",
            }}
          >
            {data.harvest}
          </div>
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.42rem",
              letterSpacing: "0.15em",
              color: data.color,
            }}
          >
            Polyphenols: {data.polyphenols}
          </div>
        </div>
      </div>
    </div>
  )
}

export interface VarietyTooltipProps {
  variety: "chetoui" | "chemlali"
  children: React.ReactNode
}

/**
 * Usage:
 *   <VarietyTooltip variety="chetoui">Chetoui</VarietyTooltip>
 *   <VarietyTooltip variety="chemlali">Chemlali</VarietyTooltip>
 */
export function VarietyTooltip({ variety, children }: VarietyTooltipProps) {
  const [visible, setVisible] = useState(false)
  const [placement, setPlacement] = useState<"top" | "bottom">("top")
  const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const triggerRef = useRef<HTMLSpanElement>(null)
  const data = VARIETY_DATA[variety]

  const show = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setTriggerRect(rect)
      const spaceAbove = rect.top
      setPlacement(spaceAbove < TOOLTIP_HEIGHT_ESTIMATE + 24 ? "bottom" : "top")
    }
    setVisible(true)
  }

  const hide = () => {
    timerRef.current = setTimeout(() => setVisible(false), 120)
  }

  useEffect(() => () => (timerRef.current ? clearTimeout(timerRef.current) : undefined), [])

  if (!data) return <span>{children}</span>

  return (
    <span
      ref={triggerRef}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      className="relative inline-block"
    >
      <span
        tabIndex={0}
        role="button"
        aria-describedby={`tooltip-${variety}`}
        className="cursor-default transition-colors outline-none"
        style={{
          color: data.color,
          borderBottom: `1px solid ${data.color}55`,
          paddingBottom: "1px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderBottomColor = data.color
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderBottomColor = `${data.color}55`
        }}
      >
        {children}
      </span>

      {typeof document !== "undefined" &&
        createPortal(
          <div
            id={`tooltip-${variety}`}
            role="tooltip"
            onMouseEnter={show}
            onMouseLeave={hide}
          >
            <TooltipPanel
              variety={variety}
              visible={visible}
              placement={placement}
              triggerRect={triggerRect}
            />
          </div>,
          document.body
        )}
    </span>
  )
}
