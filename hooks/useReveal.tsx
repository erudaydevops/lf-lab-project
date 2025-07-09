"use client"

import { GSAP_ST_START, GSAP_STAGGER } from "@/config/constants"
import { useAnimation } from "@/providers/animation"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"

export const useReveal = () => {
  const { isAnimationReady } = useAnimation()

  useGSAP(() => {
    if (isAnimationReady) {
      ScrollTrigger.batch("[data-reveal]", {
        onEnter: (reveal) => {
          gsap.to(reveal, {
            autoAlpha: 1,
            y: 0,
            x: 0,
            stagger: GSAP_STAGGER,
            ease: "power2.out"
          })
        },
        start: GSAP_ST_START
      })
    }
  }, [isAnimationReady])
}
