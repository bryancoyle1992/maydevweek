import React from "react"

const Footer = () => {
  return (
    <footer className="w-full ">
      <div className="grid grid-cols-3 py-10 space-x-10 border-t-2 h-46 place-items-center border-gray-50 bg-gradient-to-r from-blue-200 to-blue-900 ">
        <div>
          <img src="/foodsconnected_logo.png" alt="Foods Connected Icon " />
        </div>
        <div className="text-center text-white">
          <label className="border-b-2 ">Additional Information</label>
          <div className="h-2" />
          <ul className="grid grid-cols-2 text-left gap-x-1 gap-y-1">
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Help Section</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Join Us</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="grid grid-cols-2 grid-rows-2 h-28">
            <label className="row-start-1 text-white">Supported By</label>
            <div className="flex flex-row row-start-2 gap-x-5">
              <img src="/investni_logo.jpeg" alt="Invest NI Logo" />
              <img src="/investni_naturally_logo.jpeg" alt="Invest NI Logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
