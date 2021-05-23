import React, { Fragment, useState } from "react"

import { Dialog, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/solid"

import AuditsFeed from "./AuditsFeed"

const AuditsActivity = ({ openVal }) => {
  const [open, setOpen] = useState<boolean>(openVal)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-50 overflow-hidden"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed right-0 flex max-w-full pl-10 inset-y-28">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="flex flex-col h-full py-6 bg-white border-t-4 border-l-4 border-blue-900 shadow-xl bg-opacity-90 rounded-t-md rounded-b-3xl">
                  <div className="h-8 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-2xl font-semibold text-gray-900 ">
                        Activity Feed
                      </Dialog.Title>
                      <div className="flex items-center ml-3 h-7">
                        <button
                          type="button"
                          className="text-gray-400 bg-transparent rounded-md hover:text-gray-500 focus:outline-none "
                          onClick={() => setOpen(!open)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon
                            className="w-6 h-6 mr-5 font-semibold"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-1 px-4 mt-6 sm:px-6">
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <div className="h-full" aria-hidden="true">
                        <AuditsFeed />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default AuditsActivity
