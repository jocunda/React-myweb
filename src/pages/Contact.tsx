import './Page.css'
import {
    AiFillLinkedin,
    GoMarkGithub,
    FaFacebookSquare,
    SiGmail,
    SiLeetcode,
    ImPhone,

} from 'react-icons/all'
import { TaipeiSvg } from "svgs"
import { TextHeader } from 'components'


export default function Contact() {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return <>
        <TextHeader text={"Contact"} />
        <div className="contact-symbol">
            <AiFillLinkedin onClick={() => openInNewTab('https://www.linkedin.com/in/silviajocunda')} />
            <GoMarkGithub onClick={() => openInNewTab('https://github.com/jocunda')} />
            <SiLeetcode onClick={() => openInNewTab('https://leetcode.com/Jocunda/')} />
            <FaFacebookSquare onClick={() => openInNewTab('https://www.facebook.com/silvia.jocunda')} />
            <SiGmail onClick={() => openInNewTab('mailto:silviawanshan88@gmail.com')} title="silviawanshan88@gmail.com" />
            <ImPhone onClick={() => openInNewTab('tel:+886986406811')} title="+886986406811" />
        </div>
        <div className="taipei">
            <TaipeiSvg />
        </div>


    </>

}