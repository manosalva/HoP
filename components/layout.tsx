import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
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
    <div className="flex h-screen bg-green-300">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex h-full">
          <Sidebar></Sidebar>
          <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
            <div className="flex w-full mx-auto px-6 py-8">
              <div className="flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed">
                {children}
              </div>
            </div>
          </main>
        </div>
      
        {/* <Footer /> */}
      </div>
    </div>
  )
}
