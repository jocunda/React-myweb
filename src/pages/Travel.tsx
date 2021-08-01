import { Taiwanmap } from "svgs"
import { BackBlogIcon } from "components"
import './Page.css'


export default function Travel() {
    return <>
        <BackBlogIcon />
        <div className="map-container">
            <Taiwanmap />
        </div>

    </>
}