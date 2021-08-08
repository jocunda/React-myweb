import { Taitung1, Taitung2 } from "assets"

const travelblogdatas: TBlogdatas[] = [
    {
        id: 0,
        categories: "tw",
        image: Taitung1,
        date: "2022/07/07",
        text: "Taitung Day 1-台東第一天"
    },
    {
        id: 1,
        categories: "tw",
        image: Taitung2,
        date: "2022/07/08",
        text: "Day 1- go to"
    },
    {
        id: 2,
        categories: "tw",
        image: Taitung2,
        date: "2022/07/08",
        text: "Day 1- go to"
    },
    {
        id: 3,
        categories: "tw",
        image: Taitung2,
        date: "2022/07/08",
        text: "Day 1- go to"
    },
    {
        id: 4,
        categories: "tw",
        image: Taitung2,
        date: "2022/07/08",
        text: "Day 1- go to"
    },
    {
        id: 5,
        categories: "tw",
        image: Taitung2,
        date: "2022/07/08",
        text: "Day 1- go to"
    },
    {
        id: 6,
        categories: "tw",
        image: Taitung2,
        date: "2022/07/08",
        text: "Day 1- go to"
    },
    {
        id: 7,
        categories: "tw",
        image: Taitung2,
        date: "2022/07/08",
        text: "Day 1- go to"
    },
]

type TBlogdatas = {
    id: number
    categories: string
    image: string
    date: string
    text: string
}
export default travelblogdatas