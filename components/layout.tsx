import Header from "./header"
import Footer from "./footer"
import type { ReactChildren } from "react"
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  useEffect(() => {
    themeChange(false)
  }, [])
  
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
