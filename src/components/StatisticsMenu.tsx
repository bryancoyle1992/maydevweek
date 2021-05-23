import React from "react"

import {
  ClipboardCheckIcon,
  UsersIcon,
  TruckIcon,
} from "@heroicons/react/outline"
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid"

const stats = [
  {
    id: 1,
    name: "Total Suppliers",
    stat: "840",
    icon: UsersIcon,
    addionalInfo: [
      {
        name: "Compliant",
        value: 322,
      },
      {
        name: "Compliance In Progress",
        value: 400,
      },
      {
        name: "Not Compliant",
        value: "118",
      },
    ],
    change: "122",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Supply Chains Active",
    stat: "87.20%",
    icon: TruckIcon,
    change: "5.4%",
    changeType: "increase",
  },
  {
    id: 3,
    name: "Audits Completed",
    stat: "400",
    icon: ClipboardCheckIcon,
    changeType: "increase",
    change: "/600",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Stats() {
  return (
    <div className="mt-5">
      <h3 className="text-xl font-medium leading-6 text-gray-900 uppercase border-b-8 border-gray-900">
        Statistics
      </h3>

      <dl className="grid grid-cols-1 gap-5 mt-5 mr-5">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative px-4 pt-5 pb-12 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6"
          >
            <dt>
              <div className="absolute p-3 bg-blue-900 rounded-md">
                <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                {item.name}
              </p>
            </dt>
            <dd className="flex items-baseline pb-6 ml-16 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {item.stat}
              </p>
              <p
                className={classNames(
                  item.changeType === "increase"
                    ? "text-green-600"
                    : "text-red-600",
                  "ml-2 flex items-baseline text-sm font-semibold"
                )}
              >
                {item.changeType === "increase" ? (
                  <ArrowSmUpIcon
                    className="self-center flex-shrink-0 w-5 h-5 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowSmDownIcon
                    className="self-center flex-shrink-0 w-5 h-5 text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">
                  {item.changeType === "increase" ? "Increased" : "Decreased"}{" "}
                  by
                </span>
                {item.change}
              </p>
              <div className="absolute inset-x-0 bottom-0 px-4 py-4 bg-gray-50 sm:px-6">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-900 hover:text-blue-500"
                  >
                    {" "}
                    View all<span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
