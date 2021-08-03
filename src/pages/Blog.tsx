import { WidgetClock, BlogNavbar, TextHeaderBlog, BlogAbout } from "components"
import { BlogRoutes } from 'routes';
import {
    FaHamburger

} from 'react-icons/all'
import { useState } from "react";



export default function Blog() {
    const [show, setShow] = useState(false)

    return <>
        <BlogRoutes />
        <FaHamburger className="menu-hidden" onClick={() => setShow(!show)} />
        <TextHeaderBlog text1={"Welcome"} text2={"歡迎"} />
        <div className={show ? "side-info sideshow" : "side-info"}>
            <BlogAbout />
            <BlogNavbar />
            <div className="widget-blog">
                <WidgetClock />
            </div>
        </div>
        <div>Blog</div>

    </>
}