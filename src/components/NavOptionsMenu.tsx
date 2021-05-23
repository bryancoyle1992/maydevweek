import { Fragment } from "react"

import { Transition, Popover } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"

const NavOptionsMenu = ({ name, subOptions }) => {
  return (
    <Popover as="div" className="relative ml-3">
      {({ open }) => (
        <div>
          <Popover.Button
            className={`
                ${open ? "text-white " : ""}
                text-black text-lg px-3 focus:outline-none rounded-md flex focus:bg-blue-500 focus:text-white outline-none items-center  hover:bg-blue-500 hover:text-white`}
          >
            {name}
            <ChevronDownIcon
              className={`${open ? "" : "text-opacity-70"}
                outline-none ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
              aria-hidden="true"
            />
          </Popover.Button>
          {open && (
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="absolute right-0 z-10 px-3 transform -translate-x-1/2 outline-none opacity-100 left-1/2"
              >
                <div className="absolute rounded-lg ">
                  <div className="bg-white rounded-lg hover:border-white ">
                    {subOptions.map((op) => (
                      <a
                        key={op.name}
                        href={op.href}
                        className="flex items-center w-64 h-8 px-5 mt-3 transition duration-150 ease-in-out border-gray-900 hover:bg-blue-500 hover:text-white"
                      >
                        <label className="border-b-2 border-gray-800 cursor-pointer hover:border-white">
                          {op.name}
                        </label>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          )}
        </div>
      )}
    </Popover>
  )
}

export default NavOptionsMenu
