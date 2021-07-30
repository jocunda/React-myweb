import './Component.css';
import {
    DiHtml5,
    RiCss3Fill,
    SiStyledComponents,
    SiJavascript,
    IoLogoReact,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAutodesk,
    SiAdobeaftereffects,
    SiVisualstudiocode,
    SiTypescript,
    VscSettingsGear,
    SiMicrosoftword,
    SiMicrosoftexcel,
    SiMicrosoftpowerpoint,
    AiOutlineFormatPainter,
    FiGithub,
    SiReactrouter,
    IoLibrarySharp,
    HiOutlineCode,
    CgFormatText,
    VscSourceControl,
    FaPencilAlt

} from 'react-icons/all'
import styled from 'styled-components';
import { Sketchup, Lumion } from "svgs";


interface SkillProps {
    color: string
}

export const Skillbox = styled.div<SkillProps>`
    background-color:${props => props.color}
`;


export default function Skill() {



    return <>
        <div className="skill-container">
            <p className="skill-icon"><VscSettingsGear /> Skills</p>
            <div className="flip-card">
                <Skillbox className="skill-box" color={"rgb(13, 154, 200)"}>
                    <p className="skill-title"><HiOutlineCode />Languages</p>
                    <div className="skill">
                        <DiHtml5 />
                        <RiCss3Fill />
                        <SiJavascript />
                        <SiTypescript />
                    </div>
                </Skillbox>
                <div className="skill-boxback">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                    <p>Typescript</p>
                </div>
            </div>

            <div className="flip-card">
                <Skillbox className="skill-box" color={"rgb(13, 152, 187)"}>
                    <p className="skill-title"><IoLibrarySharp />Libraries</p>
                    <div className="skill">
                        <SiStyledComponents />
                        <SiReactrouter />
                    </div>
                </Skillbox>
                <div className="skill-boxback">
                    <p>Styled Component</p>
                    <p>React-Router</p>
                </div>
            </div>
            <div className="flip-card">
                <Skillbox className="skill-box" color={"rgb(42, 167, 188)"}>
                    <p className="skill-title"><IoLogoReact />Framework</p>
                    <IoLogoReact />
                </Skillbox>
                <div className="skill-boxback">
                    <p>React</p>
                </div>
            </div>
            <div className="flip-card">
                <Skillbox className="skill-box" color={"rgb(71, 182, 188)"}>
                    <p className="skill-title"><VscSourceControl />Version</p>
                    <FiGithub />
                </Skillbox>
                <div className="skill-boxback">
                    <p>Github</p>
                </div>
            </div>
            <div className="flip-card">
                <Skillbox className="skill-box" color={"rgb(101, 196, 189)"}>
                    <p className="skill-title"><AiOutlineFormatPainter />Media</p>
                    <div className="skill">
                        <SiAdobeillustrator />
                        <SiAdobephotoshop />
                        <SiAdobeaftereffects />
                    </div>
                </Skillbox>
                <div className="skill-boxback">
                    <p>Illustrator</p>
                    <p>Photoshop</p>
                    <p>After Effect</p>
                </div>
            </div>
            <div className="flip-card" >
                <Skillbox className="skill-box" color={"rgb(130, 211, 189)"}>
                    <p className="skill-title"><FaPencilAlt />Draw</p>
                    <div className="svg-row">
                        <SiAutodesk />
                        <Sketchup />
                        <Lumion />
                    </div>
                </Skillbox>
                <div className="skill-boxback">
                    <p>AutoCAD</p>
                    <p>Revit</p>
                    <p>Naviswork</p>
                    <p>Sketchup</p>
                    <p>Lumion</p>
                </div>
            </div>
            <div className="flip-card">
                <Skillbox className="skill-box" color={"rgb(159, 226, 190)"}>
                    <p className="skill-title"><CgFormatText />Text</p>
                    <div className="skill">
                        <SiVisualstudiocode />
                        <SiMicrosoftword />
                        <SiMicrosoftexcel />
                        <SiMicrosoftpowerpoint />
                    </div>
                </Skillbox>
                <div className="skill-boxback">
                    <p>VS Code</p>
                    <p>Word</p>
                    <p>Excel</p>
                    <p>PowerPoint</p>
                </div>
            </div>


        </div>

    </>
}