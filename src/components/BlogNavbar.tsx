import './Component.css';
import {
    FaHiking,
    IoMdRestaurant,
    IoFileTrayFullSharp,
    FaBook,
} from 'react-icons/all'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const StyledLink = styled(Link)`
border-radius: 8px;
border: 1px solid grey;
padding:6px;
margin: 5px;
font-size: 30px;
text-decoration: none;
color:rgb(141, 141, 141);

&:hover{
    color:rgb(14, 181, 247);
}
`;

export default function BlogNavbar() {

    return <>
        <div className="blog-navbar">
            <StyledLink to="/blog/travel"><FaHiking title="Travel" /></StyledLink>
            <StyledLink to="/blog/food"><IoMdRestaurant title="Culinary" /></StyledLink>
            <StyledLink to="/blog/doc"><IoFileTrayFullSharp title="Document" /></StyledLink>
            <StyledLink to="/blog/study"><FaBook title="Study" /></StyledLink>
        </div>
    </>

}