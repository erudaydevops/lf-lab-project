"use client"

import { GSAP_DURATION, GSAP_ST_START, GSAP_STAGGER } from "@/config/constants"
import { useAnimation } from "@/providers/animation"
import { useGSAP } from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import React from "react"
import styles from "./Title.module.scss"

interface TitleProps {
  id: string
  words: {
    text: string
    primary?: boolean
  }[]
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export const Title: React.FC<TitleProps> = ({
  id,
  words,
  as: Tag = "h2",
  className
}) => {
  const { isAnimationReady } = useAnimation()

  useGSAP(() => {
    if (isAnimationReady) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: `[data-title-id=${id}]`,
          start: GSAP_ST_START
        }
      })
      tl.to(`[data-title-id=${id}] > span > span`, {
        y: "0%",
        duration: GSAP_DURATION,
        stagger: GSAP_STAGGER,
        ease: "back.out"
      })
    }
  }, [isAnimationReady, id])

  return (
    <Tag data-title-id={id} className={clsx(styles.title, className)}>
      {words.map((word, index) => (
        <span key={index} className={word.primary ? styles.primary : ""}>
          <span>{word.text}</span>
        </span>
      ))}
    </Tag>
  )
}
