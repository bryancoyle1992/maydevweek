export default class Audits {
  id: number

  AuditDate: string

  AuditSite: string

  Auditor: string

  Supplier: string

  AuditType: string

  AuditOutcome: string

  AuditStatus: number

  constructor(
    id: number,
    AuditDate: string,
    AuditSite: string,
    Auditor: string,
    Supplier: string,
    AuditType: string,
    AuditOutcome: string,
    AuditStatus: number
  ) {
    this.id = id
    this.AuditDate = AuditDate
    this.AuditSite = AuditSite
    this.Auditor = Auditor
    this.Supplier = Supplier
    this.AuditType = AuditType
    this.AuditOutcome = AuditOutcome
    this.AuditStatus = AuditStatus
  }
}
