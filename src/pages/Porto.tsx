import './Page.css'
import { TextHeader, Pagination } from "components";
import { useState } from 'react';

const dataimages: Images[] = [
    { image: "https://picsum.photos/id/1035/600/600", key: 0 },
    { image: "https://picsum.photos/id/1036/300/600", key: 1 },
    { image: "https://picsum.photos/id/1037/600/900", key: 2 },
    { image: "https://picsum.photos/id/1038/600/600", key: 3 },
    { image: "https://picsum.photos/id/1039/600/600", key: 4 },
    { image: "https://picsum.photos/id/1040/300/600", key: 5 },
    { image: "https://picsum.photos/id/1041/600/600", key: 6 },
    { image: "https://picsum.photos/id/1042/600/300", key: 7 },
    { image: "https://picsum.photos/id/1043/600/600", key: 8 },
    { image: "https://picsum.photos/id/1044/600/600", key: 9 },
    { image: "https://picsum.photos/id/1045/600/600", key: 10 },
    { image: "https://picsum.photos/id/1049/600/600", key: 11 },
    { image: "https://picsum.photos/id/1047/600/900", key: 12 },
    { image: "https://picsum.photos/id/1048/600/600", key: 13 },
    { image: "https://picsum.photos/id/1050/600/600", key: 14 },
    { image: "https://picsum.photos/id/1051/600/600", key: 15 },
    { image: "https://picsum.photos/id/1052/600/600", key: 16 },
    { image: "https://picsum.photos/id/1053/600/900", key: 17 },
    { image: "https://picsum.photos/id/1054/600/600", key: 18 },
    { image: "https://picsum.photos/id/1055/600/600", key: 19 },
    { image: "https://picsum.photos/id/1056/600/600", key: 20 },
]

type Images = {
    image: string
    key: number
}



export default function Porto() {
    const [curpage, setCurpage] = useState(1);
    const [itemperpage] = useState(5);

    const indexofLastImage = curpage * itemperpage
    const indexofFirstImage = indexofLastImage - itemperpage
    const currentImage = dataimages.slice(indexofFirstImage, indexofLastImage)

    const paginate = (pagenumber) => {
        setCurpage(pagenumber);
    }

    return <>
        <TextHeader text={"Portofolio"} />
        <div className="gallery">
            {currentImage.map((item, index) => {
                return <>
                    <div className="pics" key={index}>
                        <img src={item.image} />
                    </div>
                </>
            })}
        </div>
        <Pagination itemperpage={itemperpage}
            totalImages={dataimages.length}
            paginate={paginate}
        />

    </>
}