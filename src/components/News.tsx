import React from "react"

import NewsItems from "./NewsItems"

const newsItemsArr = [
  {
    name: "Dutch eat most meat substitutes of Europe",
    content: `New data from market research agency Nielsen shows that the Dutch eat the most meat substitutes of all Europeans and that the consumption of vegetable alternatives is growing at a record pace throughout Europe. The report was published by the Smart Protein project in cooperation with ProVeg International. It tracks total supermarket sales in eleven European countries over the past three years.
      \n\nThe total value of the European veggie market, based on the eleven countries studied, is €3.6 billion. In each of the eleven countries surveyed, an increase in vegetable consumption was measured, with no less than 49% growth across Europe.`,
  },
  {
    name: "Greggs signals recovery with profits nearing pre-pandemic levels",
    content: `Greggs has raised hopes that it could return to pre-pandemic profit levels after a strong recovery in sales in recent weeks.
      \n\nA trading update released by the Newcastle food-on-the-go chain has revealed that two-year like-for-like sales were down only 3.9%, with a big recovery seen as restrictions ease around the country.`,
  },
  {
    name: "MENA tie-up for Del Monte and Disney",
    content: `Fresh Del Monte has announced a new partnership with The Walt Disney Company that will add Disney characters to fruit packaging in the Middle East and North Africa (MENA) region.
          \n\nThe collaboration marks Fresh Del Monte’s latest effort to encourage healthy eating across the region with the new packaging to feature Disney princesses and Marvel’s Spider-Man.\n\n  Racha El Aawar, Fresh Del Monte’s regional marketing director for MENA, said the tie-up will allow consumers to enjoy Disney’s characters in a new way.`,
  },
  {
    name: "Funding boost for Irish Fishery Harbours",
    content: `The Irish Minister for Agriculture, Food and the Marine, Charlie McConalogue TD, has announced details of a €38.3m Capital Investment Package for the ongoing development of Ireland's publicly owned harbour network including 79 Local Authority Harbours across 12 coastal Local Authorities.In announcing the 2021 programme, the Minister said, “I am delighted to announce this €38.3 million capital investment package in our six Fishery Harbour Centres and 79 Local Authority owned piers and harbours around our coast which underlines the importance this Government places on the contribution of the wider Seafood sector to Ireland’s economy and to rural coastal communities in particular.”

    The Local Authority programme which forms part of the Department of Agriculture, Food and the Marines’ 2021 Fishery Harbour and Coastal Infrastructure Development Programme, whereby the Department co-funds up to 75% of the total cost of approved projects with the Local Authority providing the balance.`,
  },
]

const News = () => {
  return (
    <div className="col-span-2 row-span-4 mt-8 text-gray-900 ">
      <label className="mt-3 ml-3 text-3xl font-medium tracking-wide uppercase border-b-8 border-gray-900">
        News
      </label>
      <div className="mt-10 mb-10">
        {newsItemsArr.map((ni) => (
          <NewsItems key={ni.name} name={ni.name} content={ni.content} />
        ))}
      </div>
    </div>
  )
}

export default News
