import React, { useState } from "react"

import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
  CheckCircleIcon,
  BanIcon,
  ThumbUpIcon,
} from "@heroicons/react/solid/"

import Audit from "../../classes/Audits/Audit"
import AuditStatusEnum from "../../classes/Audits/AuditStatusEnum"
import AuditHelper from "../../classes/Audits/services/AuditHelper"

const AuditStatusSummary = ({ totalAudits, auditCategoryArr, auditStatus }) => {
  const [currentCategory, setCurrentCategory] = useState<Audit[]>([
    auditCategoryArr,
  ])
  const [totalAuditsNumber, setTotalAudits] = useState<number>(totalAudits)
  const auditStatusName = AuditHelper.getEnumName(auditStatus)

  function renderSwitch(param) {
    switch (param) {
      case AuditStatusEnum.Completed:
        return (
          <div className="absolute p-3 border-b-4 border-l-4 border-blue-500 rounded-full ">
            <CheckCircleIcon
              className="self-center flex-shrink-0 w-5 h-5 text-green-500"
              aria-hidden="true"
            />
          </div>
        )
      case AuditStatusEnum.Finalised:
        return (
          <div className="absolute p-3 border-b-4 border-l-4 border-blue-500 rounded-full ">
            <ThumbUpIcon
              className="self-center flex-shrink-0 w-5 h-5 text-green-500"
              aria-hidden="true"
            />
          </div>
        )
      case AuditStatusEnum.WithSender:
        return (
          <div className="absolute p-3 border-b-4 border-l-4 border-blue-500 rounded-full ">
            <ArrowCircleRightIcon
              className="self-center flex-shrink-0 w-5 h-5 text-yellow-500"
              aria-hidden="true"
            />
          </div>
        )
      case AuditStatusEnum.WithReplier:
        return (
          <div className="absolute p-3 border-b-4 border-l-4 border-blue-500 rounded-full ">
            <ArrowCircleLeftIcon
              className="self-center flex-shrink-0 w-5 h-5 text-yellow-500"
              aria-hidden="true"
            />
          </div>
        )
      case AuditStatusEnum.NotRequired:
        return (
          <div className="absolute p-3 border-b-4 border-l-4 border-blue-500 rounded-full ">
            <BanIcon
              className="self-center flex-shrink-0 w-5 h-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )
      default:
        break
    }
    return <div />
  }

  return (
    <dl className="opacity-75 w-max ">
      <div className="relative grid grid-cols-6 grid-rows-2 pt-5 pb-12 overflow-hidden bg-white rounded-lg shadow md:grid-cols-2 sm:pt-6 sm:px-6">
        <dt>{renderSwitch(auditStatus)}</dt>
        <dd className="col-span-3 col-start-2 pb-6 sm:pb-2">
          <div>
            <p className="mt-3 text-2xl font-semibold text-left text-gray-900 ">
              {currentCategory[0].length}/{totalAuditsNumber}
            </p>
          </div>
        </dd>
        <dd className="col-span-3 col-start-1 pb-6 sm:pb-2">
          <div>
            <p className="mt-3 text-2xl font-semibold text-left text-gray-900 ">
              {auditStatusName}
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 px-4 py-4 bg-gray-50 sm:px-6">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {" "}
                View all<span className="sr-only"> </span>
              </a>
            </div>
          </div>
        </dd>
      </div>
    </dl>
  )
}

export default AuditStatusSummary
