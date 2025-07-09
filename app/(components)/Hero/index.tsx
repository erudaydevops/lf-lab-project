"use client"

import { Blur } from "@/components/Blur"
import { Button } from "@/components/Button"
import { Illu } from "@/components/Illu"
import { Wrapper } from "@/components/Kit"
import { Title } from "@/components/Title"
import { URL_WORK } from "@/config/constants"
import { useTranslations } from "next-intl"
import { useRef } from "react"
import styles from "./Hero.module.scss"

export const Hero = () => {
  const heroRef = useRef(null)
  const t = useTranslations("Home")
  const words = [
    { text: t("h1.line1") },
    { text: t("h1.line2"), primary: true },
    { text: t("h1.line3") }
  ]

  return (
    <div ref={heroRef} className={styles.hero}>
      <Wrapper>
        <Title id="hero" as="h1" words={words} />
        <p data-reveal="bottom">{t("text")}</p>
        <div data-reveal="bottom">
          <Button href={URL_WORK}>{t("btn")}</Button>
        </div>
        <Blur className={styles.blur} priority />
      </Wrapper>
      <Illu
        id="hero-line"
        viewBox="0 0 1057 1057"
        dasharray={3200}
        className={styles.illu}
      />
    </div>
  )
}
