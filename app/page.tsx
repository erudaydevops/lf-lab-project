"use client"

import { useRealViewport } from "@/hooks/useRealViewport"
import { About } from "./(components)/About"
// import { Blog } from "./(components)/Blog"
import { Hero } from "./(components)/Hero"
import { Market } from "./(components)/Market"
import { Portfolio } from "./(components)/Portfolio"

export default function Page() {
  useRealViewport()

  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      <Market />
      {/* <Blog /> */}
    </>
  )
}
