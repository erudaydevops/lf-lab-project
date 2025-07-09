"use client"
import React, { useState, useEffect } from "react"
import styles from "./verification.module.scss"
import { Wrapper } from "@/components/Kit"
import { Title } from "@/components/Title"
import { useTranslations } from "next-intl"
import { Sprite } from "@/components/Sprite"
import { Modal } from "@/components/Modal"
import { Button } from "@/components/Button"
import supabase from "@/config/supabase"

export default function Page() {
  const t = useTranslations("Verification")
  const words = [{ text: t("title") }]
  const [inputValue, setInputValue] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [userVerified, setUserVerified] = useState(false)

  const getData = async (username: string) => {
    if (username) {
      let query = supabase.from("lf-lab-website-verification").select()
      query = query.eq("username", username)
      const { data, error } = await query
      if (error) {
        return []
      } else {
        return data
      }
    }
  }
  const submit = async () => {
    const data = await getData(inputValue)
    const isVerify = data && data.length > 0 ? true : false
    setShowModal(true)
    if (isVerify) {
      setUserVerified(true)
    } else {
      setUserVerified(false)
    }
  }
  return (
    <>
      <div className={styles.verification}>
        <Wrapper>
          <Title id="verification" words={words} className={styles.title} />
          <p data-reveal="bottom">
            {t("p.text")} <a href="https://lflabs.fund/">{t("p.anchor")}</a>
          </p>
          <div className={styles.center}>
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault()
                submit()
              }}
            >
              <input
                onChange={(e) => setInputValue(e.target.value as string)}
                placeholder={t("form")}
              />
              <div className={styles.right}>
                <button
                  className={styles.micro}
                  type="submit"
                  // onClick={() => submit()}
                >
                  <Sprite id="Search" data-ref="Search" viewBox="0 0 24 24" />
                </button>
              </div>
            </form>
          </div>
        </Wrapper>
      </div>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          className={styles.modal}
          title={
            userVerified ? t("modal1.title", { inputValue }) : t("modal2.title")
          }
          userVerified={userVerified}
        >
          <div className={styles.list}>
            {userVerified
              ? t("modal1.description")
              : t("modal2.description", { inputValue })}
          </div>
          <Button
            className={styles.ModalButton}
            onClick={() => setShowModal(false)}
          >
            Confirm
          </Button>
        </Modal>
      )}
    </>
  )
}
