import React from "react"

const columnNames = [
  "Audit Date",
  "Audit Site",
  "Auditor",
  "Supplier",
  "Audit Type",
  "Audit Outcome",
  "Audit Status",
  "Edit",
]

const AuditsTableHead = () => {
  return (
    <thead className="ml-5 bg-gray-50">
      <tr>
        {columnNames.map((column) => (
          <th
            key={column}
            className="sticky top-0 z-20 px-6 py-3 text-xs font-medium tracking-wider text-left text-white uppercase bg-blue-900"
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default AuditsTableHead
