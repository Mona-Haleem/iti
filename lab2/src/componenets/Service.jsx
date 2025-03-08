import { Stack } from '@mui/material'
import React from 'react'
import ServiceCard from './ServiceCard'


const data = [
    {
        title: "as low as 0% apr financing upon approval with affirm",
        body:"Affirm provid flexible payment solutions, allowing you to buy better and pay over time.",
        btnText: "Learn More",
        imgSrc:"/assets/aslowas0.jpg"
    },
    {
        title: "choose with confidence",
        body:"Remove th guesswork in choosing your upholstery design by ordering complimentary swatches",
        btnText: "Order Swatches",
        imgSrc:"/assets/chooseWithConfidence.jpg"
    },
    {
        title: "complimentary design services",
        body:"Let's create your dream space together.",
        btnText: "Book A Consiltation",
        imgSrc:"/assets/ComplimentaryDesignService.jpg"
    }
]
export default function Service() {
  return (
    <Stack>
        {data.map((item, index) => (
            <ServiceCard key={item.title} item={item} imgPosition={index % 2 == 0 ?"left":"right"}/>
        ))}
    </Stack>
  )
}
