import React from "react"

import { Disclosure, Transition } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/solid"

import AuditsTable from "./AuditsTable"

const AuditsTableSummary = ({ allAudits }) => {
  return (
    <div className="absolute px-4 pt-16">
      <div className="w-full col-span-6 row-span-2 p-2 bg-white bg-opacity-50 rounded-2xl max-h-96">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-blue-600 rounded-lg hover:bg-blue-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>View Audits</span>
                <ChevronUpIcon
                  className={`${
                    !open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-900`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-20 text-sm text-gray-500 h-96"
                >
                  <div className="flex flex-col max-h-8 ">
                    <div className="-my-2 sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-y-scroll border-b shadow scrollbar-thin scrollbar-thumb-white scrollbar-track-white sm:rounded-lg max-h-72">
                          <AuditsTable allAudits={allAudits} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

export default AuditsTableSummary
