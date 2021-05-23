import React from "react"

import Link from "next/link"

import NavOptions from "./NavOptions"
import SiteHeader from "./SiteHeader"
import UserActions from "./UserActions"

const navOptionsLeft = [
  { name: "Home", href: "/", subOptions: [] },
  {
    name: "Audit Manager",
    href: "/audits/audits_main",
    subOptions: [
      { name: "Overview", href: "/audits/audits_main" },
      { name: "Company Audits", href: "/audits/audits_company" },
      { name: "Audit Items", href: "/audits/audits_main" },
      { name: "Received Customer Audits", href: "/audits/audits_company" },
      { name: "Supplier Provided Audits", href: "/audits/audits_company" },
    ],
  },
  {
    name: "Specification Manager",
    href: "/specifications/specifications_main",
    subOptions: [],
  },
  {
    name: "Supply Chain Manager",
    href: "/supplychain/supplychain_main",
    subOptions: [],
  },
  {
    name: "Risk Assessments",
    href: "/riskassessments/riskassessments_main",
    subOptions: [],
  },
]

const navOptionsRight = [{ name: "Profile", href: "/", username: "Bryan" }]

const Navigation = () => {
  return (
    <header>
      <SiteHeader />
      <nav className="px-5 py-2 bg-white border-b-2 border-gray-900">
        <div className="flex flex-row grid-cols-5 space-x-5">
          {navOptionsLeft.map((op) => (
            <NavOptions
              key={op.name}
              name={op.name}
              href={op.href}
              subOptions={op.subOptions}
            />
          ))}
          <span className="absolute right-0 flex-row flex-1 px-5 space-x-5">
            {navOptionsRight.map((op) => (
              <Link key={op.name} href={op.href}>
                <UserActions name={op.username} />
              </Link>
            ))}
          </span>
        </div>
        <div className="flex-col flex-1 sm:flex-row" />
      </nav>
    </header>
  )
}

export default Navigation
