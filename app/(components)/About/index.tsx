"use client"

import { Anchor } from "@/components/Anchor"
import { Illu } from "@/components/Illu"
import { Wrapper } from "@/components/Kit"
import { Title } from "@/components/Title"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { useTranslations } from "next-intl"
import { useRef } from "react"
import styles from "./About.module.scss"

export const About = () => {
  const bgRef = useRef(null)
  const aboutRef = useRef(null)
  const t = useTranslations("About")
  const words = [
    { text: t("title.line1") },
    { text: t("title.line2"), primary: true },
    { text: t("title.line3") }
  ]

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top bottom",
        end: "top 50%",
        scrub: true
      }
    })
    tl.to(bgRef.current, { scale: 1 })
  })

  return (
    <div ref={aboutRef} className={styles.about}>
      <Anchor id="about" />
      <Wrapper className={styles.wrapper}>
        <Title id="about" words={words} className={styles.title} />
        <p data-reveal="bottom" className={styles.intro}>
          {t("intro")}
        </p>
        <p data-reveal="bottom">{t("text")}</p>
      </Wrapper>
      <Illu
        id="about-line"
        viewBox="0 0 1504 1837"
        dasharray={6200}
        className={styles.illu}
      />
      <div className={styles.bg}>
        <div ref={bgRef} />
      </div>
    </div>
  )
}
