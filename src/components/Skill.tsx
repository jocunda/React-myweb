import styled from "styled-components"
import {
    DiHtml5,
    RiCss3Fill,
    SiStyledComponents,
    SiJavascript,
    IoLogoReact,
    SiAdobeillustrator,
    DiPhotoshop,
    SiMicrosoftoffice,
    SiAutodesk,
    SiAdobeaftereffects,
    SiVisualstudiocode,
    SiTypescript

} from 'react-icons/all'

interface LangProps {
    color?: string
}
export const LanguageP = styled.p<LangProps>`
    &:hover {
        background-color:${props => props.color}
    }
`;

export default function Skill() {
    return <>
        <div className="language-icon">

            <LanguageP color={"rgb(237, 45, 45)"} title="English">En</LanguageP>
            <LanguageP color={"rgb(255, 101, 33)"} title="Chinese" >中</LanguageP>
            <LanguageP color={"rgb(254, 246, 55)"} title="Indonesia">Id</LanguageP>
            <LanguageP color={"rgb(127, 251, 3)"} title="Cantonese" >粵</LanguageP>
            <LanguageP color={"rgb(14, 181, 247)"} title="Teochew" >潮</LanguageP>
            <LanguageP color={"rgb(188, 13, 255)"} title="Hakka" >客</LanguageP>

            <DiHtml5 />
            <RiCss3Fill />
            <SiStyledComponents />
            <SiJavascript />
            <IoLogoReact />
            <SiAdobeillustrator />
            <DiPhotoshop />
            <SiMicrosoftoffice />
            <SiAutodesk />
            SKETCHUP,REVIT, AUTOCAD, LUMION,NAVISWORK,DWG
            <SiVisualstudiocode />
            <SiAdobeaftereffects />
            <SiTypescript />


        </div>
        <div className="language-icon">

        </div>
    </>
}