"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const DESKTOP_MIN_WIDTH = 768

export type HeroBackgroundVideoProps = {
  posterSrc: string
  videoMp4: string
  posterAlt?: string
}

function prefersStaticHero(): boolean {
  if (typeof window === "undefined") return true
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true
  if (!window.matchMedia(`(min-width: ${DESKTOP_MIN_WIDTH}px)`).matches) return true
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
  if (conn?.saveData) return true
  return false
}

function isDesktopViewport(): boolean {
  return typeof window !== "undefined" && window.matchMedia(`(min-width: ${DESKTOP_MIN_WIDTH}px)`).matches
}

export function HeroBackgroundVideo({
  posterSrc,
  videoMp4,
  posterAlt = "",
}: HeroBackgroundVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [loadVideo, setLoadVideo] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    if (prefersStaticHero()) return

    const container = containerRef.current
    if (!container) return

    let cancelled = false

    const enableVideo = () => {
      if (!cancelled && isDesktopViewport()) setLoadVideo(true)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          enableVideo()
          observer.disconnect()
        }
      },
      { rootMargin: "64px", threshold: 0 }
    )
    observer.observe(container)

    const idleHandle =
      typeof requestIdleCallback !== "undefined"
        ? requestIdleCallback(enableVideo, { timeout: 2500 })
        : window.setTimeout(enableVideo, 1500)

    return () => {
      cancelled = true
      observer.disconnect()
      if (typeof cancelIdleCallback !== "undefined" && typeof idleHandle === "number") {
        cancelIdleCallback(idleHandle)
      } else {
        clearTimeout(idleHandle)
      }
    }
  }, [])

  useEffect(() => {
    if (!loadVideo) return

    const video = videoRef.current
    if (!video) return

    const onCanPlay = () => setVideoReady(true)
    video.addEventListener("canplay", onCanPlay)
    video.load()
    void video.play().catch(() => {})

    return () => video.removeEventListener("canplay", onCanPlay)
  }, [loadVideo])

  return (
    <div ref={containerRef} className="absolute inset-0 bg-black">
      <Image
        src={posterSrc}
        alt={posterAlt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className={`object-cover transition-opacity duration-700 ${
          loadVideo && videoReady ? "md:opacity-0" : ""
        }`}
      />

      {loadVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 hidden h-full w-full object-cover transition-opacity duration-700 md:block"
          style={{ opacity: videoReady ? 1 : 0 }}
          aria-hidden
        >
          <source src={videoMp4} type="video/mp4" />
        </video>
      ) : null}
    </div>
  )
}
