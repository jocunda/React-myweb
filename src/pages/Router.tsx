import './Page.css'
import { Route, Switch } from "react-router-dom"
import {
    Home,
    Contact,
    Blog,
    Exp,
    Porto
} from "pages"
import { AiOutlineCopyright } from 'react-icons/all'
import { Navbar } from "components";


export default function Router() {
    return <>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/exp' component={Exp} />
            <Route exact path='/porto' component={Porto} />
            <Route exact path='*' component={Home} />
        </Switch>
        <footer>
            <AiOutlineCopyright /> 2021 Silvia Jocunda
        </footer>

    </>

}