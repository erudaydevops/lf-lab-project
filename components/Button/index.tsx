"use client"

import { isExternalLink } from "@/libs/url"
import clsx from "clsx"
import Link from "next/link"
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react"
import { Sprite } from "../Sprite"
import styles from "./Button.module.scss"

export interface ButtonProps {
  children?: ReactNode
  href?: string
  className?: string
  disabled?: boolean
  onClick?: () => void
}

export const Button = ({
  children,
  href,
  className,
  onClick,
  disabled = false,
  ...props
}: ButtonProps) => {
  const Content = (
    <>
      <Sprite id="arrow-right" viewBox="0 0 32 8" />
      <span>{children}</span>
      <Sprite id="arrow-right" viewBox="0 0 32 8" />
    </>
  )

  const classNames = clsx(styles.btn, className)

  const attrs = {
    className: classNames,
    onClick,
    disabled
  }

  if (href) {
    if (isExternalLink(href)) {
      return (
        <a
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
          {...attrs}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {Content}
        </a>
      )
    } else {
      return (
        <Link
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
          {...attrs}
          href={href}
        >
          {Content}
        </Link>
      )
    }
  } else {
    return (
      <button
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        {...attrs}
      >
        {Content}
      </button>
    )
  }
}
