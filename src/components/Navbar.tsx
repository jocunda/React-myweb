import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Component.css';


export default function Navbar() {
    let history = useHistory();
    const [line, setLine] = useState<number>();

    function navbarclick(index) {
        setLine(index)
        switch (index) {
            case 1:
                history.push("/home")
                break;
            case 2:
                history.push("/exp")
                break;
            case 3:
                history.push("/porto")
                break;
            case 4:
                history.push("/contact")
                break;
            case 5:
                history.push("/blog")
                break;
        }

    }

    return <>
        <div className="upper-navbar">
            <p onClick={() => navbarclick(1)} className={line === 1 ? "line" : ""}>Home </p>
            <p onClick={() => navbarclick(2)} className={line === 2 ? "line" : ""}>Experience</p>
            <p onClick={() => navbarclick(3)} className={line === 3 ? "line" : ""}>Portfolio</p>
            <p onClick={() => navbarclick(4)} className={line === 4 ? "line" : ""}>Contact</p>
            <p onClick={() => navbarclick(5)} className={line === 5 ? "line" : ""}>Blog</p>
        </div>
    </>

}