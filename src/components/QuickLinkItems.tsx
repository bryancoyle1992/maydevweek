import React from "react"

import Link from "next/link"

const QuickLinks = ({ name, href, src }) => {
  return (
    <Link href={href}>
      <a>
        <dt>
          <div className="absolute p-3 bg-blue-900 rounded-md" />
          <p className="ml-16 text-lg font-medium text-gray-500 truncate">
            {name}
          </p>
        </dt>
        <dd className="flex items-baseline pb-1 ml-16 sm:pb-7">
          <p className="text-2xl font-semibold text-gray-900">
            <img src={src} alt={name} />
          </p>
        </dd>
      </a>
    </Link>
  )
}

export default QuickLinks
