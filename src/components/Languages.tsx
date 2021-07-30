import './Component.css';
import styled from "styled-components"
import {
    MdLanguage,
} from 'react-icons/all'
import { useState } from 'react';

const languages: Langtype[] = [
    {
        id: 0,
        text: "En",
        title: "English",
        color: "rgb(120, 44, 105)",
    },
    {
        id: 1,
        text: "中",
        title: "中文 / Chinese",
        color: "rgb(33, 23, 97)",
    },
    {
        id: 2,
        text: "Id",
        title: "Indonesia",
        color: "rgb(105, 78, 176)",
    },
    {
        id: 3,
        text: "粵",
        title: "粵語 / Cantonese",
        color: "rgb(73, 36, 102)",
    },
    {
        id: 4,
        text: "潮",
        title: "潮州語 / Teochew",
        color: "rgb(63, 32, 28)",
    },
    {
        id: 5,
        text: "客",
        title: "客家 / Hakka",
        color: "rgb(85, 143, 85)",
    },
]

type Langtype = {
    id: number
    text: string
    title: string
    color: string
}

interface LangProps {
    color: string
}
export const LanguageP = styled.p<LangProps>`
    &:hover {
        background-color:${props => props.color}
    }
`;

export const Lang = styled.div<LangProps>`
    background-color:${props => props.color}
`;


export default function Languages() {
    const [text, setText] = useState<string>("");
    const [lang, setLang] = useState<string>("")

    function Colorize(id) {
        for (let i = 0; i < languages.length; i++) {
            if (languages[i].id === id) {
                setLang(languages[i].color)
                setText(languages[i].title)
            }
        }
    }

    return <>
        <div className="language-icon">
            <p><MdLanguage /> Languages</p>
            {
                languages.map((language: Langtype) =>
                    <LanguageP color={language.color}
                        title={language.title}
                        onClick={() => Colorize(language.id)}
                    >{language.text}</LanguageP>
                )
            }
        </div>
        <Lang className={text === "" ? "language-text" : "language-text show"}
            color={lang}>
            {text}
        </Lang>
    </>
}