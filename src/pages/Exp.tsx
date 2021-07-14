import './Page.css'
import styled from "styled-components"
import { FaBriefcase, FaGraduationCap, GrLanguage } from 'react-icons/all'
import { useRef } from 'react';

const DataWork = [
    { company: "https://picsum.photos/id/1035/1900/600", key: 0 },
    { image: "https://picsum.photos/id/1036/1900/600", key: 1 },
    { image: "https://picsum.photos/id/1037/1900/600", key: 2 },
    { image: "https://picsum.photos/id/1038/1900/600", key: 3 },
]

interface LangProps {
    color: string
}

export const LanguageP = styled.p<LangProps>`
    color:${props => props.color}
`;


export default function Exp() {
    const inputEl = useRef()
    return <>
        <FaBriefcase />
        <FaGraduationCap />
        <GrLanguage />
        Language
        <div className="language-icon">
            <LanguageP ref={inputEl} color={'red'} title="English" content={ } />
            <p title="Chinese">中</p>
            <p title="Indonesia">Id</p>
            <p title="Cantonese">粵</p>
            <p title="Teochew">潮</p>
            <p title="Hakka">客</p>
        </div>
        <div>Experience</div>
    </>
}