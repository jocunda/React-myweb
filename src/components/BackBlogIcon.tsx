import {
    IoArrowBackCircleOutline

} from 'react-icons/all'
import { useHistory } from 'react-router-dom';
import './Component.css';

export default function BackBlogIcon() {
    let history = useHistory();
    return <>
        <IoArrowBackCircleOutline onClick={() => history.push("/blog")} className="backblog-icon" />
    </>
}