import React from "react"

import News from "../components/News"
import QuickLinks from "../components/QuickLinks"
import StatisticsMenu from "../components/StatisticsMenu"

export default function Home() {
  return (
    <div className="z-10 grid grid-cols-3 grid-rows-3 gap-20 px-2">
      <News />
      <article className="flex-col flex-1 row-span-3 mt-5 ml-4 mr-4 ">
        <StatisticsMenu />
        <QuickLinks />
      </article>
    </div>
  )
}
