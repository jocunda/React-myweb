import './Page.css'
import styled from "styled-components"
import { FaBriefcase, FaGraduationCap, MdLanguage } from 'react-icons/all'

const DataWork = [
    { company: "https://picsum.photos/id/1035/1900/600", key: 0 },
    { image: "https://picsum.photos/id/1036/1900/600", key: 1 },
    { image: "https://picsum.photos/id/1037/1900/600", key: 2 },
    { image: "https://picsum.photos/id/1038/1900/600", key: 3 },
]

interface LangProps {
    color?: string
}

export const LanguageP = styled.p<LangProps>`
    &:hover {
        color:${props => props.color}
    }
`;

export default function Exp() {

    return <>
        <FaBriefcase />
        <FaGraduationCap />

        <div className="language-icon">
            <p><MdLanguage className="lang-icon" /> Language</p>
            <LanguageP color={"rgb(237, 45, 45)"} title="English">En</LanguageP>
            <LanguageP color={"rgb(255, 101, 33)"} title="Chinese" >中</LanguageP>
            <LanguageP color={"rgb(254, 246, 55)"} title="Indonesia">Id</LanguageP>
            <LanguageP color={"rgb(127, 251, 3)"} title="Cantonese" >粵</LanguageP>
            <LanguageP color={"rgb(14, 181, 247)"} title="Teochew" >潮</LanguageP>
            <LanguageP color={"rgb(188, 13, 255)"} title="Hakka" >客</LanguageP>
        </div>
        <div>Experience</div>
    </>
}