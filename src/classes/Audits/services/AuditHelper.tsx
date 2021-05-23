import axios from "axios"

import Audit from "../Audit"
import AuditStatusEnum from "../AuditStatusEnum"

const baseUrl = "http://localhost:3001/audits"

const getAll = async () => {
  const request = axios.get<Audit>(baseUrl)
  return request.then((response) => response.data)
}

const getEnumName = (currentValue) => {
  switch (AuditStatusEnum[currentValue]) {
    case "WithSender":
      return "With Sender"
    case "WithReplier":
      return "With Replier"
    case "NotRequired":
      return "Not Required"
    default:
      return AuditStatusEnum[currentValue]
  }
}

const getEnumsStringArr = () => {
  let returnArr = []
  for (const e in AuditStatusEnum) {
    const retVal = getEnumName(e)
    if (retVal === 1) {
      break
    } else {
      returnArr = returnArr.concat(getEnumName(e))
    }
  }

  return returnArr
}

const getEnumNumberFromString = (stringVal) => {
  switch (stringVal) {
    case "With Sender":
      return AuditStatusEnum.WithSender
    case "With Replier":
      return AuditStatusEnum.WithReplier
    case "Completed":
      return AuditStatusEnum.Completed
    case "Finalised":
      return AuditStatusEnum.Finalised
    default:
      return AuditStatusEnum.NotRequired
  }
}

const updateAudit = async (updatedAudit, status) => {
  const auditToUpdate = updatedAudit as Audit
  auditToUpdate.AuditStatus = status
  const request = axios.put<Audit>(
    `${baseUrl}/${auditToUpdate.id}`,
    auditToUpdate
  )
  return request.then((response) => response.data)
}

const addAudit = async () => {
  const randomId = Math.floor(Math.random() * (100000 - 10 + 1) + 10)
  const randomStatus = Math.floor(Math.random() * (5 - 1 + 1) + 1)
  const auditToAdd = new Audit(
    randomId,
    new Date().toLocaleDateString(),
    "Random Site",
    "Random Auditor",
    "Random Supplier",
    "Random Type",
    "Random Outcome",
    randomStatus
  )

  const request = axios.post(baseUrl, auditToAdd)
  return request
    .then((response) => response.data)
    .catch((error) => {
      alert(`${error} Id already exists`)
    })
}

export default {
  getAll,
  getEnumName,
  updateAudit,
  addAudit,
  getEnumsStringArr,
  getEnumNumberFromString,
}
