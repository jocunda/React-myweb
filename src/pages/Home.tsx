import './Page.css'
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/all'
import { useState } from 'react'
import { TextHeader } from 'components'

const dataimages: Images[] = [
    { image: "https://picsum.photos/id/1035/1900/600", key: 0 },
    { image: "https://picsum.photos/id/1036/1900/600", key: 1 },
    { image: "https://picsum.photos/id/1037/1900/600", key: 2 },
    { image: "https://picsum.photos/id/1038/1900/600", key: 3 },
    { image: "https://picsum.photos/id/1039/1900/600", key: 4 },
    { image: "https://picsum.photos/id/1040/1900/600", key: 5 },
    { image: "https://picsum.photos/id/1041/1900/600", key: 6 },
    { image: "https://picsum.photos/id/1042/1900/600", key: 7 },
    { image: "https://picsum.photos/id/1043/1900/600", key: 8 },
    { image: "https://picsum.photos/id/1044/1900/600", key: 9 },
    { image: "https://picsum.photos/id/1045/1900/600", key: 10 },
    { image: "https://picsum.photos/id/1049/1900/600", key: 11 },
    { image: "https://picsum.photos/id/1047/1900/600", key: 12 },
    { image: "https://picsum.photos/id/1048/1900/600", key: 13 },
    { image: "https://picsum.photos/id/1050/1900/600", key: 14 },
    { image: "https://picsum.photos/id/1051/1900/600", key: 15 },
    { image: "https://picsum.photos/id/1052/1900/600", key: 16 },
    { image: "https://picsum.photos/id/1053/1900/600", key: 17 },
    { image: "https://picsum.photos/id/1054/1900/600", key: 18 },
    { image: "https://picsum.photos/id/1055/1900/600", key: 19 },
    { image: "https://picsum.photos/id/1056/1900/600", key: 20 },
]

type Images = {
    image: string
    key: number
}


function ImageSlider({ slides }) {
    const [image, setImage] = useState(0);
    const length = slides.length;

    function NextSlide() {
        setImage(image === length - 1 ? 0 : image + 1)
    };
    function PrevSlide() {
        setImage(image === 0 ? length - 1 : image - 1)
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
    return <>
        <RiArrowLeftSLine className="left-arrow" onClick={PrevSlide} />
        <RiArrowRightSLine className="right-arrow" onClick={NextSlide} />
        {dataimages.map((slide) => {

            return <>
                <div className={slide.key === image ? "slide active" : "slide"} key={slide.key}>
                    {slide.key === image && (<img src={slide.image}
                        alt="picsum"
                        className="image-home" loading="lazy" />)}
                </div>
            </>

        })}
    </>
}

export default function Home() {
    return <>
        <TextHeader text={"Home"} />

        <div>
            <ImageSlider slides={dataimages} />
        </div>

    </>
}