import './Component.css';


export default function TextHeader(props) {
    const string1 = Array.from(props.text);

    return <>
        <div className="textzone">
            {string1.map((word: string, index: number) => {
                return <>
                    <div key={index} className="text">{word}</div>
                </>
            })}
        </div>
    </>
}