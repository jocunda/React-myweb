import './Component.css';
import {
    FaHiking,
    IoMdRestaurant,
    IoFileTrayFullSharp,
    FaBook,
} from 'react-icons/all'
import { useHistory } from 'react-router-dom';


export default function BlogNavbar() {
    let history = useHistory();
    return <>
        <div className="blog-navbar">
            <p onClick={() => history.push("./travel")} ><FaHiking title="Travel" /></p>
            <p onClick={() => history.push("./food")}><IoMdRestaurant title="Culinary" /></p>
            <p onClick={() => history.push("./doc")}><IoFileTrayFullSharp title="Document" /> </p>
            <p onClick={() => history.push("./study")}><FaBook title="Study" /> </p>
        </div>
    </>

}