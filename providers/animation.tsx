"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

interface AnimationContextProps {
  isAnimationReady: boolean
  setAnimationReady: (ready: boolean) => void
}

const AnimationContext = createContext<AnimationContextProps | undefined>(
  undefined
)

export const useAnimation = () => {
  const context = useContext(AnimationContext)
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider")
  }
  return context
}

interface AnimationProviderProps {
  children: React.ReactNode
  delay: number
}

export const AnimationProvider = ({
  children,
  delay
}: AnimationProviderProps) => {
  const [isAnimationReady, setAnimationReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationReady(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <AnimationContext.Provider value={{ isAnimationReady, setAnimationReady }}>
      {children}
    </AnimationContext.Provider>
  )
}
