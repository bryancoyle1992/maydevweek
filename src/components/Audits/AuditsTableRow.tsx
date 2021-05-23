import React, { Fragment, useState } from "react"

import { Listbox, Transition } from "@headlessui/react"
import { SelectorIcon, CheckIcon, RefreshIcon } from "@heroicons/react/outline"

import Audit from "../../classes/Audits/Audit"
import AuditHelper from "../../classes/Audits/services/AuditHelper"

const enumStringValues = AuditHelper.getEnumsStringArr()

const AuditsTableRow = ({ currentAuditRow, index }) => {
  const [selectedStatus, setSelectedStatus] = useState<string>(
    AuditHelper.getEnumName(currentAuditRow.AuditStatus)
  )
  const [currentAudit, setCurrentAudit] = useState<Audit>(currentAuditRow)

  const updateStatus = async (status) => {
    const enumVal = AuditHelper.getEnumNumberFromString(status)
    if (currentAudit.AuditStatus !== enumVal) {
      AuditHelper.updateAudit(currentAudit, enumVal).then((returnedAudit) => {
        setCurrentAudit(returnedAudit)
      })
    }
  }

  return (
    <tr
      key={currentAudit.id}
      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
    >
      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
        {currentAudit.AuditDate}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
        {currentAudit.AuditSite}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
        {currentAudit.Auditor}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
        {currentAudit.Supplier}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
        {currentAudit.AuditType}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
        {currentAudit.AuditOutcome}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
        <span className="flex flex-row">
          <Listbox value={selectedStatus} onChange={setSelectedStatus}>
            <div className="relative mt-1">
              <Listbox.Button className="relative py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default w-44 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                <span className="block truncate">{selectedStatus}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {enumStringValues.map((enumString) => (
                    <Listbox.Option
                      key={enumString}
                      className={({ active }) =>
                        `${
                          active
                            ? "text-amber-900 bg-amber-100"
                            : "text-gray-900"
                        }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={enumString}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            {enumString}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? "text-amber-600" : "text-amber-600"
                              }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          <button
            className="relative mt-3 ml-5 text-blue-900 align-middle bg-white rounded-full hover:text-white hover:bg-blue-900 w-7 h-7 focus:outline-none"
            type="button"
            onClick={() => updateStatus(selectedStatus)}
          >
            <RefreshIcon
              className="justify-center w-5 h-5 ml-1 "
              aria-hidden="true"
            />
          </button>
        </span>
      </td>
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td>
    </tr>
  )
}

export default AuditsTableRow
