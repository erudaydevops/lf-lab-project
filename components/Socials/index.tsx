"use client"

import { Social } from "@/config/socials"
import { Icon } from "@iconify/react"
import clsx from "clsx"
import { HTMLAttributes } from "react"
import styles from "./Socials.module.scss"

export const SocialLink = ({ name, icon, url }: Social) => {
  return (
    <a
      className={styles.social}
      href={url}
      title={name}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={icon} />
    </a>
  )
}

interface Socials extends HTMLAttributes<HTMLUListElement> {
  socials: Social[]
}

export const Socials = ({ socials, ...props }: Socials) => {
  const classNames = clsx(styles.socials, props.className)

  return (
    <ul {...props} className={classNames}>
      {socials.map((social, index) => (
        <li key={index}>
          <SocialLink {...social} />
        </li>
      ))}
    </ul>
  )
}
