import React from "react"

import AuditsTableHead from "./AuditsTableHead"
import AuditsTableRow from "./AuditsTableRow"

const AuditsTable = ({ allAudits }) => {
  return (
    <table className="divide-y divide-gray-200 table-fixed ">
      <AuditsTableHead />
      <tbody>
        {allAudits.map((audit, index) => (
          <AuditsTableRow
            key={audit.id}
            currentAuditRow={audit}
            index={index}
          />
        ))}
      </tbody>
    </table>
  )
}

export default AuditsTable
