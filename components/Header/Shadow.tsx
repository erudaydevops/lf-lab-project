"use client"

import useScroll from "@/hooks/useScroll"
import clsx from "clsx"
import styles from "./Header.module.scss"

export const Shadow = () => {
  const { y } = useScroll()
  return <div className={clsx(styles.shadow, { [styles.active]: y > 50 })} />
}
