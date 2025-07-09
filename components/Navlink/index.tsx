import Link from "next/link"
import styles from "./Navlink.module.scss"

interface NavlinkProps {
  title: string
  href: string
}

export const Navlink = ({ title, href }: NavlinkProps) => {
  return (
    <Link
      href={href}
      className={styles.navlink}
      {...(href === "" && { "data-tooltip": "Coming soon" })}
    >
      <span data-title={title}>
        <span>{title}</span>
      </span>
    </Link>
  )
}
