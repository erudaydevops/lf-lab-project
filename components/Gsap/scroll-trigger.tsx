"use client"

import { useReveal } from "@/hooks/useReveal"
import { useLenis } from "@/libs/lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useLayoutEffect } from "react"

export const ScrollTriggerConfig = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.clearScrollMemory("manual")
    // ScrollTrigger.defaults({
    //   markers: process.env.NODE_ENV === "development"
    // })
  }, [])

  const lenis = useLenis(ScrollTrigger.update)
  useEffect(() => ScrollTrigger.refresh(), [lenis])

  useReveal()

  return null
}
