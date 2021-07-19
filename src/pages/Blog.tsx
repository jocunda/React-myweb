import { WidgetClock, BlogNavbar } from "components"
import { BlogRoutes } from 'routes';


export default function Blog() {

    return <>
        <BlogRoutes />

        <div>Blog</div>
        <WidgetClock />
        <BlogNavbar />
    </>
}