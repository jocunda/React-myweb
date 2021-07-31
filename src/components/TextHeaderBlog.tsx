import './Component.css';
import styled from "styled-components"

const datacolors0: string[] = [
    "rgb(165, 196, 137)",
    "rgb(108, 165, 129)",
    "rgb(90, 93, 140)",
    "rgb(148, 171, 218)",
    "rgb(225, 204, 240)",
    "rgb(168, 150, 141)",
    "rgb(248, 227, 250)",]

const datacolors1: string[] = [
    "rgb(63, 186, 217)",
    "rgb(75, 222, 219)",
]

interface WordProps {
    color: string
}

export const WordDiv = styled.div<WordProps>`
    color:${props => props.color}
`;

export default function TextHeaderBlog(props) {
    const string1 = Array.from(props.text1);
    const string2 = Array.from(props.text2);


    return <>
        <div>
            <div className="textheaderblogzone">
                {string1.map((word: string, index: number) => {
                    return <>
                        <WordDiv
                            key={index}
                            className="textheaderblog"
                            color={datacolors0[index]}
                        >{word}</WordDiv>
                    </>
                })}
            </div>

            <div className="textheaderblogzone2">
                {string2.map((word: string, index: number) => {
                    return <>
                        <WordDiv key={index} className="textheaderblog"
                            color={datacolors1[index]}
                        >{word}</WordDiv>
                    </>
                })}
            </div>
        </div>
    </>
}