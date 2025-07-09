import styles from "./Anchor.module.scss"

interface AnchorProps {
  id: string
}

export const Anchor = ({ id }: AnchorProps) => (
  <div id={id} className={styles.anchor} />
)
