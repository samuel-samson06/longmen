import event1 from "../../../long_men_images/event1.webp"
import event2 from "../../../long_men_images/event2.jpg"
import event3 from "../../../long_men_images/event3.jpg"
import event4 from "../../../long_men_images/event4.jpg"

const date=new Date()
const today= date.toDateString()

export const uploadedInfo=[
    {
        id:crypto.randomUUID() ,
        date:today,
        img:event1
    },
    {
        id:crypto.randomUUID(),
        date:today,
        img:event2
    },
    {
        id:crypto.randomUUID() ,
        date:today,
        img:event3
    },
    {
        id:crypto.randomUUID() ,
        date:today,
        img:event4
    },
    {
        id:crypto.randomUUID() ,
        date:today,
        img:event1
    },
    {
        id:crypto.randomUUID(),
        date:today,
        img:event2
    },
    {
        id:crypto.randomUUID() ,
        date:today,
        img:event3
    },
    {
        id:crypto.randomUUID() ,
        date:today,
        img:event4
    },
]