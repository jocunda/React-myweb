import './Page.css'
import styled from "styled-components"
import { FaBriefcase, FaGraduationCap, MdLanguage } from 'react-icons/all'
import { useState } from 'react';
import { univ1, univ2 } from "images"

const _experiences: Experience[] = [
    {
        id: 0,
        year: 2014,
        company: "Tanjungpura University - 丹戎布拉國立大學",
        position: "Bachelor of Engineering",
        spec: "Faculty of Engineering, Study Program of Architecture",
        image: "univ1"
    },
    {
        id: 1,
        year: 2015,
        company: "PT.Global Mandira Semesta",
        position: "Chinese Translator/工程中文翻譯",
        spec: "Chinese-Indonesia-English translator for ME-EPC Project. 語言翻譯在EPC工程."
    },
    {
        id: 2,
        year: 2016,
        company: "台灣紅白電訊股份公司",
        position: "Sales Promoter/銷售推廣",
        spec: "Part time as sales card. 兼職工作，做銷售電話卡。"
    },
    {
        id: 3,
        year: 2018,
        company: "National Cheng Kung University - 國立成功大學",
        position: "Master of Science/建築碩士",
        spec: "Architectural Environmental Programming and Control-建築環境計劃與控制",
        image: "univ2"
    },
    {
        id: 4,
        year: 2019,
        company: "昌吉營造股份有限公司",
        position: "BIM Enginner/工程師",
        spec: "Build 3D model, dispel report and assist field engineer. 建制3D模型，釋疑報告，與協助現場工程師。"
    },
    {
        id: 5,
        year: 2020,
        company: "大陸工程股份有限公司",
        position: "BIM Enginner/工程師",
        spec: "Build 3D model, drawing, rendering, and QR Code. 建制3D模型，繪製軀體圖，彩現與QR Code。"
    },

]

interface LangProps {
    color?: string
}
export const LanguageP = styled.p<LangProps>`
    &:hover {
        color:${props => props.color}
    }
`;
type Experience = {
    id: number
    year: number
    company: string
    position: string
    spec: string
    className?: string
    image?: string
}

export default function Exp() {


    const [experiences, setExperiences] = useState<Experience[]>(_experiences)


    function show(id) {
        const newExperiences = experiences.map((experience: Experience) => {
            if (experience.id === id) {
                return {
                    ...experience,
                    className: experience.id % 2 === 0 ? "show" : "down show"
                }
            } else {
                return {
                    ...experience,
                    className: experience.id % 2 === 0 ? "" : "down"
                }
            }
        })

        setExperiences(newExperiences)

    }


    return <>
        <div className="container-data">
            {experiences.map((experience: Experience) =>
                <div key={experience.id}>
                    <div className="work-year" onClick={() => show(experience.id)}>
                        {experience.year === 2014 || experience.year === 2018 ? <FaGraduationCap /> : <FaBriefcase />}
                        {experience.year}
                    </div>
                    <div className={`work-container ${experience.className}`}>
                        <div className="work-company">
                            <p>{experience.company}</p>
                            <p className="p-bold">{experience.position}</p>
                        </div>
                        <div className="work-spec">
                            {experience.spec}
                        </div>
                        <div>
                            {experience.year === 2014 && <img src={univ1} alt="univ1" className="univimage" />}
                            {experience.year === 2018 && <img src={univ2} alt="univ2" className="univimage" />}
                        </div>
                    </div>


                </div>
            )}
        </div>

        <div className="language-icon">
            <p><MdLanguage className="lang-icon" /> Language</p>
            <LanguageP color={"rgb(237, 45, 45)"} title="English">En</LanguageP>
            <LanguageP color={"rgb(255, 101, 33)"} title="Chinese" >中</LanguageP>
            <LanguageP color={"rgb(254, 246, 55)"} title="Indonesia">Id</LanguageP>
            <LanguageP color={"rgb(127, 251, 3)"} title="Cantonese" >粵</LanguageP>
            <LanguageP color={"rgb(14, 181, 247)"} title="Teochew" >潮</LanguageP>
            <LanguageP color={"rgb(188, 13, 255)"} title="Hakka" >客</LanguageP>
        </div>
    </>
}