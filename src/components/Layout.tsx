import React from "react"

import Head from "next/head"

import Footer from "./Footer"
import Navigation from "./Navigation"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Foods Connected</title>
        <link rel="icon" href="/fc_icon_32.png" />
      </Head>
      <div>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-r from-white to-gray-200 ">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
