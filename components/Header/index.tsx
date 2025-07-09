"use client"

import { GRID_LINE, URL_BLOG, URL_CONTACT } from "@/config/constants"
import { useGSAP } from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { useRef, useState } from "react"
import { Button } from "../Button"
import { Icon } from "../Icon"
import { Wrapper } from "../Kit"
import { Navlink } from "../Navlink"
import styles from "./Header.module.scss"
import { Shadow } from "./Shadow"


interface NavigationProps {
  open: boolean
  openNav: () => void
  closeNav: () => void
}

const Navigation = ({ open, openNav, closeNav }: NavigationProps) => {
  const tl = useRef(gsap.timeline({ paused: true }))
  const t = useTranslations("Navigation")
  const length = GRID_LINE + 1
  const list = [
    {
      title: t("portfolio"),
      href: "/#portfolio"
    },
    {
      title: t("about"),
      href: "/#about"
    },
    {
      title: t("market"),
      href: "/#market"
    },
    {
      title: t("blog"),
      href: URL_BLOG
    }
  ]

  useGSAP(() => {
    tl.current.to(
      "[data-nav-bg]",
      {
        backgroundColor: "#000",
        duration: 1,
        ease: "power3.inOut"
      },
      "a"
    )
    tl.current.to(
      "[data-nav-bg] > div",
      {
        height: "100%",
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.05
      },
      "a"
    )
    tl.current.to(
      "[data-nav] li > *",
      {
        y: "0%",
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: 0.25
      },
      "a"
    )
  })

  const handleOpenNav = () => {
    tl.current.timeScale(1.2).play()
    openNav()
  }
  const handleCloseNav = () => {
    tl.current.timeScale(2).reverse()
    closeNav()
  }
  const handleToggleNav = () => (open ? handleCloseNav() : handleOpenNav())

  return (
    <>
      <nav data-nav className={styles.nav}>
        <ul>
          {list.map(({ title, href }, index) => (
            <li key={index}>
              <Navlink href={href} title={title} />
            </li>
          ))}
          <li className={styles.btn}>
            <Button href={URL_CONTACT}>{t("contact")}</Button>
          </li>
        </ul>
        <div className={styles.bg} data-nav-bg>
          {Array.from({ length }, (_, i) => (
            <div key={i} />
          ))}
        </div>
      </nav>
      <button className={styles.bnav} onClick={handleToggleNav}>
        <Icon icon="material-symbols-light:menu-rounded" />
      </button>
    </>
  )
}

export const Header = () => {
  const [open, setOpen] = useState(false)

  const openNav = () => setOpen(true)
  const closeNav = () => setOpen(false)

  return (
    <header className={clsx(styles.header, { [styles.open]: open })}>
      <Wrapper className={styles.wrapper}>
        <Link href="/" className={styles.logo}>
          <svg viewBox="0 0 86 34">
            <path
              className={styles.lf}
              d="M0 7.86805e-07H7V34H0V7.86805e-07Z M27 7.86805e-07H34V34H27V7.86805e-07Z M48 15V22L33 22V15L48 15Z M51 7.86805e-07V7L33 7V0L51 7.86805e-07Z M24 27V34H5L5 27H24Z"
            />
            <path
              className={styles.labs}
              d="M84.4655 6.99997H81.1755L80.6155 6.42997V5.14997H81.3155V6.36997H84.3255V3.85997H81.2255L80.6555 3.29997V0.649966L81.2255 0.0899658H84.4455L85.0155 0.649966V2.10997H84.3155V0.719966H81.3555V3.21997H84.4655L85.0255 3.78997V6.42997L84.4655 6.99997Z M77.5336 6.99997H73.6036V0.0899658H77.4936L78.0636 0.649966V2.86997L77.4336 3.49997L78.0936 4.15997V6.42997L77.5336 6.99997ZM77.3536 2.67997V0.719966H74.3136V3.20997H76.8236L77.3536 2.67997ZM77.3836 4.34997L76.8536 3.81997H74.3136V6.36997H77.3836V4.34997Z M66.8554 6.99997H66.1454V5.66997L68.2754 0.0899658H69.1754L71.3054 5.65997V6.99997H70.6054V5.73997L70.2854 4.90997H67.1754L66.8554 5.73997V6.99997ZM68.7254 0.789966L67.3854 4.27997H70.0754L68.7254 0.789966Z M64.58 6.99997H60.92V0.0899658H61.63V6.33997H64.58V6.99997Z"
            />
          </svg>
        </Link>
        <Navigation open={open} openNav={openNav} closeNav={closeNav} />
      </Wrapper>
      <Shadow />
    </header>
  )
}
