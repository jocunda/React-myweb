import './Component.css';
import { silvia } from "images"

export default function BlogAbout() {

    return <>
        <div className="about-me">
            <p className="about-title">About Me</p>
            <img src={silvia} alt="pp" />
            <p>
                Hello World!<br />
                Novice level of frontend web design and development.<br />
                Love to cook, travel, study, and have high interest for technology.
            </p>
        </div>

    </>
}