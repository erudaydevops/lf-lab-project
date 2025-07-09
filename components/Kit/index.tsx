"use client"

import clsx from "clsx"
import { HTMLAttributes, ReactNode } from "react"
import styles from "./Kit.module.scss"

interface ElementProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

const BaseElement = ({ children, className, ...props }: ElementProps) => {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  )
}

const Wrapper = ({ className, ...props }: ElementProps) => (
  <BaseElement {...props} className={clsx(styles.wrapper, className)} />
)

const Content = ({ className, ...props }: ElementProps) => (
  <BaseElement {...props} className={clsx(styles.content, className)} />
)

export { Content, Wrapper }
