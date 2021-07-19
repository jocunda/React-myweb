import { BrowserRouter as Router, Redirect, Route } from "react-router-dom"
import {
    Home,
    Contact,
    Blog,
    Exp,
    Porto
} from "pages"
import { AiOutlineCopyright } from 'react-icons/all'
import { Navbar } from "components";
import { BlogRoutes } from "routes";

type RoutesProps = {
    path: string
    component?: () => JSX.Element
}


const routes: RoutesProps[] = [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "*", component: () => <Redirect to="/home" /> },
    { path: "/contact", component: Contact },
    { path: "/exp", component: Exp },
    { path: "/porto", component: Porto },
    { path: "/blog", component: Blog },
]



export default function MainRoutes() {

    return <>
        <Router>
            <Navbar />
            {routes.map((route: RoutesProps) =>
                <div key={route.path}>
                    <Route exact path={route.path} component={route.component} />
                </div>
            )}
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="*"><Redirect to="/home" /></Route>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/exp" component={Exp} />
            <Route exact path="/porto" component={Porto} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:name" component={Blog} /> */}
            <BlogRoutes />
            <footer>
                <AiOutlineCopyright /> 2021 Silvia Jocunda
            </footer>
        </Router>
    </>
}
