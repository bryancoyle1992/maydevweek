import React from "react"

const NewsItems = ({ name, content }) => {
  return (
    <div className="mt-10 mb-10 overflow-hidden border-4 border-gray-100 rounded-tr-lg rounded-bl-lg rounded-br-lg shadow ">
      <h3 className="px-4 py-5 text-2xl font-semibold sm:px-6">
        <em>{name}</em>
      </h3>
      <p className="px-4 py-5 sm:p-6">{content}</p>
    </div>
  )
}

export default NewsItems
