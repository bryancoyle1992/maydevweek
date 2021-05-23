import React, { useState } from "react"

import Audit from "../../classes/Audits/Audit"
import AuditHelper from "../../classes/Audits/services/AuditHelper"
import AuditsPanel from "../../components/Audits/AuditsPanel"

const AuditsMain = ({ audits }) => {
  const [allAudits, setAllAudits] = useState<Audit[]>([...audits])

  return (
    <div>
      <AuditsPanel allAudits={allAudits} auditsTotal={allAudits.length} />
    </div>
  )
}

export async function getStaticProps() {
  const audits = await AuditHelper.getAll()
  return {
    props: {
      audits,
    },
  }
}

export default AuditsMain
