"use client"

import clsx from "clsx"
import Image from "next/image"
import { CSSProperties, useRef } from "react"
import { useResizeObserver } from "usehooks-ts"
import styles from "./Blur.module.scss"

interface BlurProps {
  priority?: boolean
  className?: string
}

export const Blur = ({ priority, className }: BlurProps) => {
  const ref = useRef<HTMLImageElement>(null)
  const { height } = useResizeObserver({
    ref,
    box: "border-box"
  })

  return (
    <div
      className={clsx(styles.blur, className)}
      style={{ "--height": `${height}px` } as CSSProperties}
    >
      <Image
        src="/img/circle.webp"
        width="2548"
        height="2548"
        alt="LF"
        draggable="false"
        ref={ref}
        priority={priority}
      />
    </div>
  )
}
