import './Page.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {
    Home,
    Contact,
    Blog,
    Exp,
    Porto
} from "pages"
import { AiOutlineCopyright } from 'react-icons/all'
import { Navbar } from "components";

type RouteProp = {
    key?: number
    path?: string
    component?: () => JSX.Element
    childRoutes?: RouteProp[]
}

const routes: RouteProp[] = [
    {
        key: 0,
        path: "/",
        component: Exp,

    },
    {
        key: 1,
        path: "/home",
        component: Home,

    },
    {
        key: 2,
        path: "*",
        component: Home,

    },
    {
        key: 3,
        path: "contact",
        component: Contact,

    },
    {
        key: 4,
        path: "exp",
        component: Exp,
    },
    {
        key: 5,
        path: "porto",
        component: Porto,
    },
    {
        key: 6,
        path: "blog",
        component: Blog,
        childRoutes: [
            {
                key: 7,
                path: "/blog/travel",
                component: Blog,
            },
            {
                key: 8,
                path: "/blog/food",
                component: Blog,
            },
            {
                key: 9,
                path: "/blog/doc",
                component: Blog,
            },
            {
                key: 10,
                path: "/blog/study",
                component: Blog,
            },
        ]
    },
]


function RouteWithSubRoutes(route) {
    return <Route
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.childRoutes} />
        )}
    />

}
function MainRoute({ routes }) {



    return <>
        <Switch>
            {routes.map((route) => (
                <RouteWithSubRoutes key={route.key} {...route} />
            ))}
        </Switch>
    </>
}


export default function ConfigRouter() {

    return <>
        <Router>
            <Navbar />
            <Exp />
            {/* <MainRoute routes={routes} /> */}
            <footer>
                <AiOutlineCopyright /> 2021 Silvia Jocunda
            </footer>
        </Router>
    </>
}