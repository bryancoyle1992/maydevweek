import React, { useState } from "react"

import {
  CogIcon,
  QuestionMarkCircleIcon,
  SpeakerphoneIcon,
  PlusIcon,
} from "@heroicons/react/solid"

import AuditsActivity from "./AuditsActivity"
import AuditsCreate from "./AuditsCreate"

const AuditsOptions = () => {
  const [openFeed, setOpenFeed] = useState<boolean>(false)
  const [openCreate, setOpenCreate] = useState<boolean>(false)

  return (
    <div className="absolute flex -mt-20 space-x-10 right-5">
      <button
        type="button"
        className="p-3 text-white bg-blue-900 border border-transparent rounded-full shadow-sm hover:bg-blue-700 focus:outline-none"
        onClick={() => setOpenCreate(!openCreate)}
      >
        <PlusIcon className="w-6 h-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="p-3 text-white bg-blue-900 border border-transparent rounded-full shadow-sm hover:bg-blue-700 focus:outline-none"
        onClick={() => console.log("settings modal here")}
      >
        <CogIcon className="w-6 h-6" aria-hidden="true" />
      </button>
      <a
        target="_blank"
        href="https://support.foodsconnected.com/support/search?term=audits"
        className="p-3 text-white bg-blue-900 border border-transparent rounded-full shadow-sm hover:bg-blue-700 focus:outline-none"
        rel="noreferrer"
      >
        <QuestionMarkCircleIcon className="w-6 h-6" aria-hidden="true" />
      </a>
      <button
        type="button"
        className="p-3 text-white bg-blue-900 border border-transparent rounded-full shadow-sm hover:bg-blue-700 focus:outline-none"
        onClick={() => setOpenFeed(!openFeed)}
      >
        <SpeakerphoneIcon className="w-6 h-6" aria-hidden="true" />
      </button>
      {openFeed ? <AuditsActivity openVal={openFeed} /> : <></>}
      {openCreate ? <AuditsCreate openVal={openCreate} /> : <></>}
    </div>
  )
}

export default AuditsOptions
