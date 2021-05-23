import React from "react"

import {
  ThumbUpIcon,
  PencilIcon,
  DocumentAddIcon,
  BanIcon,
  ExclamationIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/solid"

const timeline = [
  {
    id: 1,
    content: "Tesco Visit Audit edited by",
    target: "Steve Jones",
    href: "#",
    date: "May 20",
    datetime: "2020-05-20",
    icon: PencilIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "Mary Taylor created a new ",
    target: "Audit Template",
    href: "#",
    date: "May 18",
    datetime: "2020-05-18",
    icon: DocumentAddIcon,
    iconBackground: "bg-yellow-500",
  },
  {
    id: 3,
    content: "Cranswick Audit finalised by",
    target: "Martha Gardner",
    href: "#",
    date: "May 18",
    datetime: "2020-05-18",
    icon: ThumbUpIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 4,
    content: "Vion Audit set to Not Required by",
    target: "Thomas Murray",
    href: "#",
    date: "May 12",
    datetime: "2020-05-30",
    icon: BanIcon,
    iconBackground: "bg-red-500",
  },
  {
    id: 5,
    content: "Annual Tesco Audit due in",
    target: "24 days",
    href: "#",
    date: "May 4",
    datetime: "2020-05-04",
    icon: ExclamationIcon,
    iconBackground: "bg-yellow-300",
  },
  {
    id: 6,
    content: "Routine Audit shared with",
    target: "Samworth Brothers",
    href: "#",
    date: "May 6",
    datetime: "2020-05-06",
    icon: ShareIcon,
    iconBackground: "bg-blue-400",
  },
  {
    id: 7,
    content: "Vion Audit updated by",
    target: "Bethany Blake",
    href: "#",
    date: "May 03",
    datetime: "2020-05-03",
    icon: PencilIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 8,
    content: "Niall Doherty removed template for",
    target: "Health and Safety Audit",
    href: "#",
    date: "April 28",
    datetime: "2020-04-28",
    icon: TrashIcon,
    iconBackground: "bg-red-400",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const AuditsFeed = () => {
  return (
    <div className="flow-root m-5 ">
      <ul className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-opacity-80 bg-blue-900"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      "h-8 w-8 rounded-full  flex items-center justify-center ring-8  ring-blue-100"
                    )}
                  >
                    <event.icon
                      className="w-5 h-5 text-white "
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{" "}
                      <a
                        href={event.href}
                        className="font-medium text-gray-900"
                      >
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="text-sm text-right text-gray-500 whitespace-nowrap">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AuditsFeed
