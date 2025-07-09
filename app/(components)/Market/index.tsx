"use client"

import { Anchor } from "@/components/Anchor"
import { Blur } from "@/components/Blur"
import { Button } from "@/components/Button"
import { Illu } from "@/components/Illu"
import { Wrapper } from "@/components/Kit"
import { Title } from "@/components/Title"
import { GSAP_ST_START, URL_PARTNERS } from "@/config/constants"
import { useTranslations } from "next-intl"
import { useRef } from "react"
import styles from "./Market.module.scss"

export const Market = () => {
  const marketRef = useRef(null)
  const t = useTranslations("Market")
  const words = [
    { text: t("title.line1") },
    { text: t("title.line2") },
    { text: t("title.line3"), primary: true }
  ]

  const cards = [
    {
      icon: "icon-1",
      title: t("card1.title"),
      text: t("card1.text")
    },
    {
      icon: "icon-2",
      title: t("card2.title"),
      text: t("card2.text")
    },
    {
      icon: "icon-3",
      title: t("card3.title"),
      text: t("card3.text")
    },
    {
      icon: "icon-4",
      title: t("card4.title"),
      text: t("card4.text")
    }
  ]

  return (
    <div ref={marketRef} className={styles.market}>
      <Anchor id="market" />
      <Wrapper>
        <div className={styles.heading}>
          <Title id="market" words={words} className={styles.title} />
          <div className={styles.right}>
            <p data-reveal="bottom">{t("text")}</p>
            <div data-reveal="bottom">
              <Button href={URL_PARTNERS}>{t("btn")}</Button>
            </div>
          </div>
          <Blur className={styles.blur} />
        </div>
        <ul className={styles.list}>
          {cards.map(({ icon, title, text }, index) => (
            <li key={index}>
              <Illu
                id={icon}
                viewBox="0 0 228 228"
                dasharray={200}
                duration={10}
                className={styles.icon}
                start={GSAP_ST_START}
              />
              <div className={styles.right}>
                <h3 data-reveal="bottom">{title}</h3>
                <p data-reveal="bottom">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Wrapper>
    </div>
  )
}
