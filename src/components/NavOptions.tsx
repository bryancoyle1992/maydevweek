import Link from "next/link"

import NavOptionsMenu from "./NavOptionsMenu"

const NavOptions = ({ name, href, subOptions }) => {
  return (
    <div className="py-0.5">
      {subOptions.length === 0 ? (
        <Link key={name} href={href}>
          <a className="flex flex-row px-5 text-xl font-medium text-gray-900 bg-white rounded-md hover:bg-blue-500 hover:text-white lg:text-lg hover:border-blue-900 focus:bg-blue-500 focus:text-white">
            {name}
          </a>
        </Link>
      ) : (
        <NavOptionsMenu name={name} subOptions={subOptions} />
      )}
    </div>
  )
}

export default NavOptions
