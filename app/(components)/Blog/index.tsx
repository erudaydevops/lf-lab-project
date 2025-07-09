"use client"

import { Blur } from "@/components/Blur"
import { Button } from "@/components/Button"
import { Illu } from "@/components/Illu"
import { Wrapper } from "@/components/Kit"
import { Title } from "@/components/Title"
import { formatDate } from "@/libs/utils"
import { useTranslations } from "next-intl"
import { useRef } from "react"
import styles from "./Blog.module.scss"

export const Blog = () => {
  const blogRef = useRef(null)
  const t = useTranslations("Blog")
  const words = [{ text: t("title") }]

  const news = [
    {
      title: "The NFT Revolution: Beyond Digital Art",
      text: "NFTs are no longer just digital art; they are now redefining property rights across various industries.",
      date: "August 29, 2024 3:45 PM"
    },
    {
      title: "Bitcoin 2.0: Ushering in a New Era of Decentralized Finance",
      text: "As Bitcoin reaches new heights, the next wave of innovation is poised to reshape the decentralized financial landscape.",
      date: "September 15, 2024 10:00 AM"
    },
    {
      title: "Ethereum 3.0: The Future of Smart Contracts",
      text: "With the advent of Ethereum 3.0, blockchain technology is set to revolutionize automated transactions with faster and more secure smart contracts.",
      date: "October 1, 2024 2:30 PM"
    }
  ]

  return (
    <div ref={blogRef} className={styles.blog}>
      <Wrapper>
        <div className={styles.heading}>
          <Title id="blog" words={words} className={styles.title} />
          <Blur className={styles.blur} />
        </div>
        <ul className={styles.list}>
          {news.map(({ title, text, date }, index) => (
            <li key={index} className={styles.item}>
              <time data-reveal="bottom">
                <strong>{formatDate(date)}</strong>
                <span>{new Date(date).toLocaleTimeString()}</span>
              </time>
              <div className={styles.content}>
                <h3 data-reveal="bottom">{title}</h3>
                <p data-reveal="bottom">{text}</p>
              </div>
              <Button className={styles.more} data-reveal="bottom">
                Learn More
              </Button>
            </li>
          ))}
        </ul>
      </Wrapper>

      <Illu
        id="blog-line"
        viewBox="0 0 1144 851"
        dasharray={3200}
        className={styles.illu}
      />
    </div>
  )
}
