import './Component.css';
import { IntersectionObserver } from "components";
import { useRef, useState } from 'react';


export default function ImageRenderer(props) {
    const [isinview, setIsinview] = useState(true)
    const imgRef = useRef()

    IntersectionObserver(imgRef, () => {
        setIsinview(true);
    })

    return <>
        <div ref={imgRef}>
            {
                isinview &&
                <img src={props.url} className="image" />
            }
        </div>
    </>

}