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
    color: string
  }
> = {
  chetoui: {
    name: "Chetoui",
    arabic: "شتوي",
    origin: "Northern Tunisia · Bizerte & Béja",
    character: "Bold & Intense",
    taste: "Grassy, peppery, alive. The oil that announces itself.",
    color: "#8B9E6B",
  },
  chemlali: {
    name: "Chemlali",
    arabic: "شملالي",
    origin: "Central & Southern Tunisia · Sfax",
    character: "Elegant & Refined",
    taste: "Soft almond, gentle fruitiness, a buttery whisper at the finish.",
    color: "#C9A84C",
  },
}

const TOOLTIP_HEIGHT_ESTIMATE = 180

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

      <div style={{ padding: "1.25rem 1.4rem" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "0.75rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.45rem",
                letterSpacing: "0.25em",
                color: data.color,
                marginBottom: "0.25rem",
                textTransform: "uppercase",
              }}
            >
              {data.character}
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.4rem",
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
              fontSize: "1.1rem",
              color: "rgba(201,168,76,0.25)",
              fontStyle: "italic",
              lineHeight: 1,
            }}
          >
            {data.arabic}
          </div>
        </div>

        {/* Origin */}
        <div
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.42rem",
            letterSpacing: "0.15em",
            color: "rgba(180,165,130,0.5)",
            marginBottom: "0.85rem",
          }}
        >
          {data.origin}
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(201,168,76,0.1)", marginBottom: "0.85rem" }} />

        {/* Taste — single crisp line */}
        <p
          style={{
            fontSize: "0.78rem",
            color: "rgba(245,237,216,0.7)",
            lineHeight: 1.6,
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 300,
            margin: 0,
          }}
        >
          {data.taste}
        </p>
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
