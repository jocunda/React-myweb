import './Page.css'
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/all'
import { useState } from 'react'

const dataimages: Images[] = [
    { image: "https://picsum.photos/id/1035/1900/600", key: 0 },
    { image: "https://picsum.photos/id/1036/1900/600", key: 1 },
    { image: "https://picsum.photos/id/1037/1900/600", key: 2 },
    { image: "https://picsum.photos/id/1038/1900/600", key: 3 },
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
                        className="image-home" />)}
                </div>
            </>

        })}
    </>
}

export default function Home() {

    return <>
        <div>
            <ImageSlider slides={dataimages} />
        </div>

    </>
}