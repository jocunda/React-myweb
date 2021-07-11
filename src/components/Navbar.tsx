import { useHistory } from 'react-router-dom';
import './Component.css';


export default function Navbar() {
    let history = useHistory();
    return <>
        <div className="upper-navbar">
            <p onClick={() => history.push("/home")}>Home </p>
            <p onClick={() => history.push("/exp")} >Experience</p>
            <p onClick={() => history.push("/porto")}>Portfolio</p>
            <p onClick={() => history.push("/contact")}>Contact</p>
            <p onClick={() => history.push("/blog")}>Blog</p>
        </div>
    </>

}