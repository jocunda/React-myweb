import './Page.css'
import { TextHeader, Pagination, ImageRenderer } from "components";
import { useState } from 'react';

const dataimages: Images[] = [
    { image: "https://picsum.photos/id/1035/1200/1200" },
    { image: "https://picsum.photos/id/1036/300/600" },
    { image: "https://picsum.photos/id/1037/600/900" },
    { image: "https://picsum.photos/id/1038/600/600" },
    { image: "https://picsum.photos/id/1039/600/1200" },
    { image: "https://picsum.photos/id/1040/300/600" },
    { image: "https://picsum.photos/id/1041/600/600" },
    { image: "https://picsum.photos/id/1042/600/300" },
    { image: "https://picsum.photos/id/1043/600/600" },
    { image: "https://picsum.photos/id/1044/1200/600" },
    { image: "https://picsum.photos/id/1045/600/600" },
    { image: "https://picsum.photos/id/1049/600/600" },
    { image: "https://picsum.photos/id/1047/600/900" },
    { image: "https://picsum.photos/id/1048/600/600" },
    { image: "https://picsum.photos/id/1050/600/1200" },
    { image: "https://picsum.photos/id/1051/600/600" },
    { image: "https://picsum.photos/id/1052/600/600" },
    { image: "https://picsum.photos/id/1053/600/900" },
    { image: "https://picsum.photos/id/1054/600/600" },
    { image: "https://picsum.photos/id/1055/600/600" },
    { image: "https://picsum.photos/id/1056/600/600" },
    { image: "https://picsum.photos/id/1057/600/600" },
    { image: "https://picsum.photos/id/1058/600/600" },
    { image: "https://picsum.photos/id/1059/600/600" },
    { image: "https://picsum.photos/id/1060/600/600" },
    { image: "https://picsum.photos/id/1061/600/600" },
    { image: "https://picsum.photos/id/1062/600/600" },
    { image: "https://picsum.photos/id/1063/600/600" },
    { image: "https://picsum.photos/id/1064/600/600" },
    { image: "https://picsum.photos/id/1065/600/600" },
    { image: "https://picsum.photos/id/1066/600/600" },
    { image: "https://picsum.photos/id/1067/600/600" },
    { image: "https://picsum.photos/id/1068/600/600" },
    { image: "https://picsum.photos/id/1069/600/600" },
    { image: "https://picsum.photos/id/1070/600/600" },
    { image: "https://picsum.photos/id/1071/600/600" },
    { image: "https://picsum.photos/id/1072/600/600" },
    { image: "https://picsum.photos/id/1073/600/600" },
    { image: "https://picsum.photos/id/1074/600/600" },
    { image: "https://picsum.photos/id/1075/600/600" },
    { image: "https://picsum.photos/id/1076/600/600" },
    { image: "https://picsum.photos/id/1077/600/600" },
    { image: "https://picsum.photos/id/1078/600/600" },
    { image: "https://picsum.photos/id/1079/600/600" },
    { image: "https://picsum.photos/id/1080/600/600" },
    { image: "https://picsum.photos/id/1081/600/600" },
    { image: "https://picsum.photos/id/1082/600/600" },
    { image: "https://picsum.photos/id/1083/800/600" },
]

type Images = {
    image: string
}

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
                    <ImageRenderer url={item.image} key={index} />
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