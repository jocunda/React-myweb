import { WidgetClock, BlogNavbar, TextHeaderBlog, BlogAbout } from "components"
import { BlogRoutes } from 'routes';
import {
    BsClockFill,
    CgProfile,
    BsCalendarFill,
    FaHamburger

} from 'react-icons/all'


export default function Blog() {

    return <>
        <BlogRoutes />
        <FaHamburger className="menu-hidden" />
        <TextHeaderBlog text1={"Welcome"} text2={"歡迎"} />
        <div className="side-info">
            <BlogAbout />
            <BlogNavbar />
            <div className="widget-blog">
                <WidgetClock />
            </div>
        </div>
        {/* <div className="blognavbar-icon">
            <CgProfile />
            <BsClockFill />
            <BsCalendarFill />
        </div> */}


    </>
}