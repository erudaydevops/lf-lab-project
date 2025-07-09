import { Footer } from "@/components/Footer"
import { Grid } from "@/components/Grid"
import { GSAP } from "@/components/Gsap"
import { Header } from "@/components/Header"
import { Lenis } from "@/components/Lenis"
import { Noise } from "@/components/Noise"
import { LENIS } from "@/config/constants"
import { MetadataSeo } from "@/libs/metadata"
import { AnimationProvider } from "@/providers/animation"
import "@/styles/globals.scss"
import clsx from "clsx"
import lenis from "lenis"
import { Viewport } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages, getTranslations } from "next-intl/server"
import localFont from "next/font/local"

const fontMain = localFont({
  variable: "--font-main",
  display: "swap",
  src: [
    {
      path: "./fonts/aeonik/Aeonik-Thin.woff2",
      style: "normal",
      weight: "200"
    },
    {
      path: "./fonts/aeonik/Aeonik-Light.woff2",
      style: "normal",
      weight: "300"
    },
    {
      path: "./fonts/aeonik/Aeonik-Bold.woff2",
      style: "normal",
      weight: "700"
    },
    {
      path: "./fonts/aeonik/Aeonik-Black.woff2",
      style: "normal",
      weight: "900"
    }
  ]
})

const fontSecondary = localFont({
  variable: "--font-secondary",
  display: "swap",
  src: [
    {
      path: "./fonts/nippo/Nippo-Variable.woff2",
      style: "normal",
      weight: "100 900"
    }
  ]
})

export const viewport: Viewport = {
  themeColor: "rgb(115, 255, 0)"
}

export async function generateMetadata() {
  const t = await getTranslations("Seo.Home")
  const title = t("title")
  const description = t("description")

  return MetadataSeo({ title, description })
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale()
  const messages = await getMessages()
  const fonts = clsx(fontMain.variable, fontSecondary.variable)

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={fonts} suppressHydrationWarning={true}>
        <AnimationProvider delay={0}>
          <GSAP scrollTrigger={true} />
          {lenis && <Lenis root options={LENIS} />}
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main>{children}</main>
            <Footer />
          </NextIntlClientProvider>
          <Grid />
          <Noise />
        </AnimationProvider>
      </body>
    </html>
  )
}
