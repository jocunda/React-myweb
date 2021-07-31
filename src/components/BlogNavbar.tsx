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
display: flex;
align-items: center;
gap:5px;
font-size: 24px;
text-decoration: none;
color:rgb(141, 141, 141);
font-family: 'Shadows Into Light', cursive;

&:hover{
    color:rgb(14, 181, 247);
}
`;

export default function BlogNavbar() {

    return <>
        <div className="blog-navbar">
            <StyledLink to="/blog/travel"><FaHiking />Travel</StyledLink>
            <StyledLink to="/blog/food"><IoMdRestaurant />Culinary</StyledLink>
            <StyledLink to="/blog/doc"><IoFileTrayFullSharp />Document</StyledLink>
            <StyledLink to="/blog/study"><FaBook />Study</StyledLink>
        </div>
    </>

}