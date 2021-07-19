import { Route } from "react-router-dom"
import {
    Travel,
    Food,
    Doc,
    Study
} from "pages"

type RoutesProps = {
    path: string
    component?: () => JSX.Element
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