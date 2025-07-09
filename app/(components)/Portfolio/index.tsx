"use client"

import { Anchor } from "@/components/Anchor"
import { Blur } from "@/components/Blur"
import { Button } from "@/components/Button"
import { Illu } from "@/components/Illu"
import { Wrapper } from "@/components/Kit"
import { Title } from "@/components/Title"
import { URL_PORTFOLIO } from "@/config/constants"
import { list } from "@/config/portfolio"
import { useTranslations } from "next-intl"
import { useRef } from "react"
import styles from "./Portfolio.module.scss"

export const Portfolio = () => {
  const portfolioRef = useRef(null)
  const t = useTranslations("Portfolio")
  const words = [{ text: t("title") }]

  return (
    <div ref={portfolioRef} className={styles.portfolio}>
      <Anchor id="portfolio" />
      <Wrapper>
        <div>
          <Title id="portfolio" words={words} className={styles.title} />
          <p data-reveal="bottom">
            {/* {t("text")} */}
          </p>
          <Blur className={styles.blur} priority />
          <div data-reveal="bottom">
            <Button href={URL_PORTFOLIO}>{t("btn")}</Button>
          </div>
        </div>
        <ul className={styles.list} data-grid>
          {list.map(({ name, logo, url }, index) => (
            <li key={index}>
              <a
                href={url}
                title={name}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal="bottom"
              >
                {logo}
              </a>
            </li>
          ))}
        </ul>
      </Wrapper>
      <Illu
        id="portfolio-line"
        viewBox="0 0 1052 1043"
        dasharray={3400}
        className={styles.illu}
      />
    </div>
  )
}
