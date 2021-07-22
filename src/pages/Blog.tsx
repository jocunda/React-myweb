import { WidgetClock, BlogNavbar, TextHeader } from "components"
import { BlogRoutes } from 'routes';
import {
    BsClockFill,
    CgProfile,
    BsCalendarFill

} from 'react-icons/all'


export default function Blog() {

    return <>
        <BlogRoutes />
        <TextHeader text={"Blog"} />
        <div className="blognavbar-icon">
            <CgProfile />
            <BsClockFill />
            <BsCalendarFill />
        </div>
        <div className="widget-blog">

            <WidgetClock />
        </div>

        <BlogNavbar />
    </>
}