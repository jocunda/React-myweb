import { BrowserRouter as Router, Redirect, Route, RouteComponentProps } from "react-router-dom"
import { Navbar } from "components";
import { BlogRoutes } from "routes";
import React from "react";

// import {
//     Home,
//     Contact,
//     Blog,
//     Exp,
//     Porto
// } from "pages"
const Home = React.lazy(() => import(/*webpackChunkName:"Home"*/'../pages/Home'))
const Contact = React.lazy(() => import(/*webpackChunkName:"Contact"*/'../pages/Contact'))
const Blog = React.lazy(() => import(/*webpackChunkName:"Blog"*/'../pages/Blog'))
const Exp = React.lazy(() => import(/*webpackChunkName:"Exp"*/'../pages/Exp'))
const Porto = React.lazy(() => import(/*webpackChunkName:"Porto"*/'../pages/Porto'))



type RoutesProps = {
    path: string
    component?: React.ComponentType<any> | React.ComponentType<RouteComponentProps<any, unknown>>
}


const routes: RoutesProps[] = [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/contact", component: Contact },
    { path: "/exp", component: Exp },
    { path: "/porto", component: Porto },
    { path: "/blog", component: Blog },
]



export default function MainRoutes() {

    return <>

        <Router>
            <Navbar />
            <React.Suspense fallback={<p>Loading...</p>}>
                {routes.map((route: RoutesProps) =>
                    <div key={route.path}>
                        <Route exact path={route.path} component={route.component} />
                    </div>
                )}
                <Route exact path="*"><Redirect to="/home" /></Route>

                <BlogRoutes />
            </React.Suspense>

        </Router>
    </>
}
