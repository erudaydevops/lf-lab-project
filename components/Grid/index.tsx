import { GRID_LINE } from "@/config/constants"
import { Wrapper } from "../Kit"
import styles from "./Grid.module.scss"

export const Grid = () => {
  const length = GRID_LINE

  return (
    <Wrapper className={styles.grid}>
      {Array.from({ length }, (_, i) => (
        <div key={i} className={styles.line} />
      ))}
    </Wrapper>
  )
}
