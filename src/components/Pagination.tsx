import './Component.css';
import {
    MdSkipPrevious,
    MdSkipNext
} from 'react-icons/all'


export default function Pagination(props) {
    const pagenumber = []

    for (let i = 1; i <= Math.ceil(props.totalImages / props.itemperpage); i++) {
        pagenumber.push(i);
    }

    return <>
        <div className="pagenumber-container">
            <MdSkipPrevious className="pagenumber-icon" onClick={() => props.paginate(pagenumber[0])} />

            {
                pagenumber.map((number, index) => (
                    <button
                        key={index}
                        onClick={() => props.paginate(number)}
                        className="pagenumber">
                        {number}
                    </button>
                ))
            }
            < MdSkipNext className="pagenumber-icon" onClick={() => props.paginate(pagenumber[pagenumber.length - 1])} />
        </div>
    </>
}