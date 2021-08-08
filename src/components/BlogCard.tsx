import { travelblogdatas } from "data"

export default function BlogCard() {
    return <>

        {travelblogdatas.map((data) =>
            <>
                <div className="blogcard-header" key={data.id}>
                    <img src={data.image} alt="pic" className="travelpic" />
                    <p className="date-post">Date: {data.date}</p>
                    <p className="tblog-title">{data.text}</p>
                </div>
            </>
        )
        }
    </>
}