import './Component.css';

export default function TextHeader(props) {
    const string1 = (props.text).split("");
    const stringArr = new Array();
    for (var i = 0; i < string1.length; i++) {
        stringArr.push(string1[i]);
        if (i != string1.length - 1) {
            stringArr.push("");
        }
    }
    return <>
        <div className="textzone">
            {string1.map((word) => {
                return <>
                    <div key={props.id} className="text">{word}</div>
                </>
            })}
        </div>
    </>
}