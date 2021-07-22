import { Route } from "react-router-dom"
// import {
//     Travel,
//     Food,
//     Doc,
//     Study
// } from "pages"
import React from "react";

const Travel = React.lazy(() => import(/*webpackChunkName:"Travel"*/'../pages/Travel'))
const Food = React.lazy(() => import(/*webpackChunkName:"Food"*/'../pages/Food'))
const Doc = React.lazy(() => import(/*webpackChunkName:"Doc"*/'../pages/Doc'))
const Study = React.lazy(() => import(/*webpackChunkName:"Study"*/'../pages/Study'))
type RoutesProps = {
    path: string
    // component?: () => JSX.Element
    component?: React.LazyExoticComponent<any>
}

const routes: RoutesProps[] = [
    { path: "/blog/travel", component: Travel },
    { path: "/blog/food", component: Food },
    { path: "/blog/doc", component: Doc },
    { path: "/blog/study", component: Study },
]

export default function BlogRoutes() {

    return <>

        {routes.map((route: RoutesProps) =>
            <div key={route.path}>
                <Route exact path={route.path} component={route.component} />
            </div>
        )}

    </>
}