"use client"

import { ReactNode } from "react"
import ReactDOM from "react-dom"
import { Sprite } from "../Sprite"
import styles from "./Modal.module.scss"

interface ModalProps {
  onClose: () => void
  children: ReactNode
  className?: string
  title?: string
  userVerified: boolean   // ✅ Fixed: Ab prop defined hai
}

export const Modal = ({
  onClose,
  children,
  userVerified,
  title
}: ModalProps) => {
  const handleClose = () => {
    onClose()
  }

  const CloseButton = () => {
    return (
      <button className={styles.close} onClick={handleClose} type="button">
        <svg
          height="329pt"
          viewBox="0 0 329.26933 329"
          width="329pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
        </svg>
      </button>
    )
  }

  const modalContent = (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <CloseButton />
        <Sprite
          viewBox={userVerified ? "0 0 405.272 405.272" : "0 0 64 64"}
          id={userVerified ? "check" : "warning"}
          className={styles.symbols}
        />
        {title && <div className={styles.title}>{title}</div>}
        {children}
      </div>
      <div className={styles.overlayClose} onClick={handleClose}></div>
    </div>
  )

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")!
  )
}
