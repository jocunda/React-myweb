import './Page.css'
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/all'
import { useEffect, useState } from 'react'
import { TextHeader } from 'components'

const dataimages: Images[] = [
    { image: "https://picsum.photos/id/1049/1900/600", key: 0 },
    { image: "https://picsum.photos/id/1047/1900/600", key: 1 },
    { image: "https://picsum.photos/id/1048/1900/600", key: 2 },
    { image: "https://picsum.photos/id/1050/1900/600", key: 3 },
    { image: "https://picsum.photos/id/1051/1900/600", key: 4 },
    { image: "https://picsum.photos/id/1052/1900/600", key: 5 },
    { image: "https://picsum.photos/id/1053/1900/600", key: 6 },
    { image: "https://picsum.photos/id/1054/1900/600", key: 7 },
    { image: "https://picsum.photos/id/1055/1900/600", key: 8 },
    { image: "https://picsum.photos/id/1056/1900/600", key: 9 },
]

type Images = {
    image: string
    key: number
}


function ImageSlider({ slides, autoPlayTime }) {
    const [image, setImage] = useState(0);
    const length = slides.length;

    function NextSlide() {
        setImage(image === length - 1 ? 0 : image + 1)
    };
    function PrevSlide() {
        setImage(image === 0 ? length - 1 : image - 1)
    };


    useEffect(() => {
        const timer = setTimeout(() => {
            NextSlide();
        }, autoPlayTime);

        return () => clearTimeout(timer);
    }, [image]);

    return <>
        <RiArrowLeftSLine className="left-arrow" onClick={PrevSlide} />
        <RiArrowRightSLine className="right-arrow" onClick={NextSlide} />
        {dataimages.map((slide, index) => {

            return <>
                <div className={slide.key === image ? "slide active" : "slide"} key={index}>
                    {slide.key === image && (<img src={slide.image}
                        alt="picsum"
                        className="image-home" />)}
                </div>
            </>
        })}
        <div className="dotimg-container">
            {dataimages.map((slide) => {
                return <>
                    <div className={slide.key === image ? "dotimage dotactive" : "dotimage"}>
                    </div>
                </>
            })}
        </div>

    </>
}


export default function Home() {
    return <>

        <div>
            <ImageSlider slides={dataimages} autoPlayTime={3000} />
        </div>

    </>
}