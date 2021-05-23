import React from "react"

const SpecificationsPanel = () => {
  return (
    <div className="bg-right bg-no-repeat bg-specifications">
      <div className="min-h-screen mt-10 mb-10 ml-10">
        <div className="z-10 grid min-h-screen grid-rows-5 bg-blue-500 rounded-t-xl rounded-b-xl bg-opacity-5 sm:grid-cols-4 lg:grid-cols-6">
          <div>
            <label className="m-5 font-bold text-blue-900 uppercase text-opacity-95 text-8xl col-span-full">
              Specification
            </label>
            <label className="font-thin text-blue-900 uppercase text-opacity-85 text-8xl col-span-full">
              Manager
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecificationsPanel
