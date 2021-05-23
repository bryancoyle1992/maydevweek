import React from "react"

import AuditStatusEnum from "../../classes/Audits/AuditStatusEnum"
import AuditsOptions from "./AuditsOptions"
import AuditTableSummary from "./AuditsTableSummary"
import AuditStatusSummary from "./AuditStatusSummary"

const AuditsPanel = ({ allAudits, auditsTotal }) => {
  const auditsWithSender = allAudits.filter(
    (a) => a.AuditStatus === AuditStatusEnum.WithSender
  )

  const auditsWithReplier = allAudits.filter(
    (a) => a.AuditStatus === AuditStatusEnum.WithReplier
  )

  const auditsWithCompleted = allAudits.filter(
    (a) => a.AuditStatus === AuditStatusEnum.Completed
  )

  const auditsWithNotRequired = allAudits.filter(
    (a) => a.AuditStatus === AuditStatusEnum.NotRequired
  )

  const auditsWithFinalised = allAudits.filter(
    (a) => a.AuditStatus === AuditStatusEnum.Finalised
  )

  return (
    <div className="bg-right bg-no-repeat bg-audits">
      <div className="min-h-screen mt-10 mb-10 ml-10">
        <div className="z-10 grid min-h-screen grid-rows-5 bg-blue-500 rounded-t-xl rounded-b-xl bg-opacity-5 sm:grid-cols-4 lg:grid-cols-6">
          <div>
            <label className="m-5 font-bold text-blue-900 uppercase text-opacity-95 text-8xl col-span-full">
              Audit
            </label>
            <label className="font-thin text-blue-900 uppercase text-opacity-85 text-8xl col-span-full">
              Manager
            </label>
            <AuditsOptions />
          </div>

          <div className="flex flex-row row-start-2 col-span-full ml-28 gap-x-20">
            <AuditStatusSummary
              totalAudits={auditsTotal}
              auditCategoryArr={auditsWithCompleted}
              auditStatus={AuditStatusEnum.Completed}
            />
            <AuditStatusSummary
              totalAudits={auditsTotal}
              auditCategoryArr={auditsWithFinalised}
              auditStatus={AuditStatusEnum.Finalised}
            />
            <AuditStatusSummary
              totalAudits={auditsTotal}
              auditCategoryArr={auditsWithSender}
              auditStatus={AuditStatusEnum.WithSender}
            />
            <AuditStatusSummary
              totalAudits={auditsTotal}
              auditCategoryArr={auditsWithReplier}
              auditStatus={AuditStatusEnum.WithReplier}
            />

            <AuditStatusSummary
              totalAudits={auditsTotal}
              auditCategoryArr={auditsWithNotRequired}
              auditStatus={AuditStatusEnum.NotRequired}
            />
          </div>
          <div className="row-start-3 ml-24 col-span-full">
            <AuditTableSummary allAudits={allAudits} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuditsPanel
