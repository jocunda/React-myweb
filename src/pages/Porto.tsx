import './Page.css'
import { TextHeader, Pagination, ImageRenderer } from "components";
import { useState } from 'react';
import { dataimages } from "data"


export default function Porto() {
    const [curpage, setCurpage] = useState(1);
    const [itemperpage] = useState(16);
    const indexofLastImage = curpage * itemperpage
    const indexofFirstImage = indexofLastImage - itemperpage
    const currentImage = dataimages.slice(indexofFirstImage, indexofLastImage)


    const paginate = (pagenumber) => {
        setCurpage(pagenumber);
    }

    return <>
        <TextHeader text={"Portofolio"} />

        <div className="image-container">
            {currentImage.map((item, index) => {
                return <>
                    <ImageRenderer url={item.image}
                        id={index} txt={item.text} link={item.link}
                        temp={item.tempimage}
                    />
                </>
            })}
        </div>

        <Pagination itemperpage={itemperpage}
            totalImages={dataimages.length}
            paginate={paginate}
            first={indexofFirstImage}
        />

    </>
}