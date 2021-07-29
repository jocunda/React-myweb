import './Component.css';
import styled from "styled-components"

const datacolors0: string[] = [
    "rgb(194, 232, 246)",
    "rgb(188, 190, 235)",
    "rgb(255, 245, 219)",
    "rgb(252, 209, 222)",
    "rgb(252, 164, 214)",
    "rgb(13, 152, 187)"]

const datacolors1: string[] = [
    "rgb(42, 167, 188)",
    "rgb(71, 182, 188)",
    "rgb(101, 196, 189)",
    "rgb(130, 211, 189)",
    "rgb(159, 226, 190)",
    "rgb(125, 180, 235)",
    "rgb(134, 210, 246)",
    "rgb(177, 234, 247)",
    "rgb(249, 246, 178)",
    "rgb(246, 242, 76)",
    "rgb(181, 235, 81)",
    "rgb(187, 197, 242)",
    "rgb(255, 221, 244)",
    "rgb(255, 204, 231)",

]

interface WordProps {
    color: string
}

export const WordDiv = styled.div<WordProps>`
    color:${props => props.color}
`;

export default function TextHeaderHome(props) {
    const string1 = Array.from(props.text1);
    const string2 = Array.from(props.text2);


    return <>
        <div className="textheaderhome-container">
            <div className="textheaderhomezone">
                {string1.map((word, index) => {
                    return <>
                        <WordDiv
                            key={index}
                            className="textheaderhome"
                            color={datacolors0[index]}
                        >{word}</WordDiv>
                    </>
                })}
            </div>

            <div className="textheaderhomezone2">
                {string2.map((word, index) => {
                    return <>
                        <WordDiv key={index} className="textheaderhome"
                            color={datacolors1[index]}
                        >{word}</WordDiv>
                    </>
                })}
            </div>
        </div>
    </>
}