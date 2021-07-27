import './Component.css'
import { useIntersectionObserver } from "components"
import { useEffect, useRef, useState } from 'react'
import { VscChromeClose, BiLinkExternal } from 'react-icons/all'

interface ImageRender {
    url: string
    txt: string
    alt?: string
    onLoad?(): void
    id: number
    link: string
    temp: string
}

export default function ImageRenderer(props: ImageRender) {
    const { url, alt = '', onLoad = () => { }, id, txt, link, temp } = props
    const [isinview, setIsinview] = useState(false)
    const imgRef = useRef(null)
    const containerRef = useRef(null)
    const isVisible = useIntersectionObserver(containerRef)

    useEffect(() => {


        if (!isVisible || isinview) {
            return;
        }
        if (imgRef.current) {
            imgRef.current.onload = () => {
                setIsinview(true)
                // console.log(index)
                onLoad()
            }
        }
    }, [isVisible, onLoad])

    const [model, setModel] = useState(false)
    const [tempimg, setTempimg] = useState('')
    const [text, setText] = useState('')
    const [olink, setOlink] = useState('')

    function getImage() {

        setTempimg(temp)
        setModel(true)
        setText(txt)
        setOlink(link)
    }

    return <>
        <div className={model ? "model open" : "model"}>
            <div>
                <img src={tempimg} alt="" />
                <p>{text}</p>
                {
                    olink !== "" ? <a href={olink} target="_blank" className="ext-icon"><BiLinkExternal /></a> : ""
                }

            </div>
            <VscChromeClose className="model-icon" onClick={() => setModel(false)} />
        </div>
        <div ref={containerRef} onClick={getImage}>
            {
                (isVisible || isinview) &&
                <img src={url} className="image" alt={alt} ref={imgRef} key={id} />
            }
        </div>
    </>

}