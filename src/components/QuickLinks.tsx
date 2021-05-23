import React from "react"

import QuickLinkItems from "./QuickLinkItems"

const quickLinksArr = [
  { name: "Audit Manager", src: "/audit_ql.jpg", href: "/audits/audits_main" },
  {
    name: "Specification Manager",
    src: "/specs_ql.jpg",
    href: "/specifications/specifications_main",
  },

  {
    name: "Supply Chain Manager",
    src: "/supply_chain_ql.png",
    href: "/supplychain/supplychain_main",
  },

  {
    name: "Risk Assessment Manager",
    src: "/risk_assessment_ql.png",
    href: "/riskassessments/riskassessments_main",
  },
]

const QuickLinks = () => {
  return (
    <div className="mt-5 rounded-md">
      <div>
        <h3 className="text-xl font-medium leading-6 text-gray-900 uppercase border-b-8 border-gray-900">
          Quick Links
        </h3>
        <dl className="grid grid-cols-1 gap-5 mt-5 mr-5">
          {quickLinksArr.map((item) => (
            <div
              key={item.name}
              className="relative px-4 pt-5 pb-5 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6"
            >
              <QuickLinkItems
                name={item.name}
                href={item.href}
                src={item.src}
              />
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default QuickLinks

// const QuickLinks = () => {
//   return (
//     <div className="mt-5 rounded-md bg-gradient-to-br from-blue-300 to-blue-900 bg-opacity-85 h-30 md:mr-10 md:justify-center">
//       <div>
//         <h3 className="text-lg font-medium leading-6 text-gray-900 uppercase">
//           Quick Links
//         </h3>
//       </div>
//       <div className="grid grid-cols-2 gap-5 mt-3 mb-3">
//         {quickLinksArr.map((ql) => (
//           <QuickLinkItems key={ql.name} linkInfo={ql} />
//         ))}
//       </div>
//     </div>
//   )
// }
