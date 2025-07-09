import {
  URL_BLOG,
  URL_CAREERS,
  URL_CONTACT,
  URL_KIT,
  URL_PRIVACY,
  URL_TEAM,
  URL_TERMS,
  URL_VERIFICATION
} from "@/config/constants"
import { socials } from "@/config/socials"
import { useTranslations } from "next-intl"
import { Blur } from "../Blur"
import { Wrapper } from "../Kit"
import { Navlink } from "../Navlink"
import { Socials } from "../Socials"
import { Logo } from "../Sprite"
import styles from "./Footer.module.scss"

export const Footer = () => {
  const t = useTranslations("Footer")
  const tn = useTranslations("Navigation")

  const list = [
    {
      menu: t("nav"),
      links: [
        {
          title: tn("portfolio"),
          href: "/#portfolio"
        },
        {
          title: tn("about"),
          href: "/#about"
        },
        {
          title: tn("market"),
          href: "/#market"
        },
        {
          title: tn("blog"),
          href: URL_BLOG
        },
        {
          title: tn("contact"),
          href: URL_CONTACT
        }
      ]
    },
    {
      menu: "LF Labs",
      links: [
        {
          title: tn("team"),
          href: URL_TEAM
        },
        {
          title: tn("careers"),
          href: URL_CAREERS
        },
        {
          title: tn("news"),
          href: URL_BLOG
        },
        {
          title: tn("verification"),
          href: URL_VERIFICATION
        },
        {
          title: tn("kit"),
          href: URL_KIT
        }
      ]
    },
    {
      menu: t("legal"),
      links: [
        {
          title: tn("privacy"),
          href: URL_PRIVACY
        },
        {
          title: tn("terms"),
          href: URL_TERMS
        }
      ]
    }
  ]

  return (
    <div className={styles.footer}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.merge}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <Socials socials={socials} className={styles.socials} />
          </div>
          <p>LF Labs © 2024. {t("rights")}</p>
        </div>
        {list.map(({ menu, links }, i) => (
          <ul key={i} className={styles.menu}>
            <li>{menu}</li>
            {links.map(({ title, href }, j) => (
              <li key={j}>
                <Navlink title={title} href={href} />
              </li>
            ))}
          </ul>
        ))}
      </Wrapper>
      <Blur className={styles.blur} />
    </div>
  )
}
