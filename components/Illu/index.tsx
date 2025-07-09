"use client"

import { useAnimation } from "@/providers/animation"
import { useGSAP } from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import { CSSProperties, useRef } from "react"
import { useResizeObserver } from "usehooks-ts"
import { Sprite } from "../Sprite"
import styles from "./Illu.module.scss"

interface IlluProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string
  dasharray: number
  viewBox: string
  duration?: number
  ease?: string
  start?: string
}

export const Illu = ({
  id,
  dasharray,
  viewBox,
  duration = 15,
  ease = "power3.out",
  start = "top 50%",
  ...props
}: IlluProps) => {
  const ref = useRef<HTMLElement>(null)
  const { isAnimationReady } = useAnimation()
  const { height } = useResizeObserver({
    ref,
    box: "border-box"
  })

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start }
    })
    tl.set(ref.current, { strokeDashoffset: dasharray })
    // if (isAnimationReady) {
    tl.to(ref.current, { strokeDashoffset: 0, duration, ease })
    // }
  }, [isAnimationReady])

  return (
    <div
      {...props}
      className={clsx(styles.illu, props.className)}
      style={{ "--height": `${height}px` } as CSSProperties}
    >
      <Sprite
        id={id}
        // @ts-ignore
        ref={ref}
        data-ref={id}
        className={styles.svg}
        viewBox={viewBox}
        style={{ strokeDasharray: dasharray, strokeDashoffset: dasharray }}
      />
    </div>
  )
}
