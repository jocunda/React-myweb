
export default function Pagination(props) {
    const pagenumber = []

    for (let i = 1; i <= Math.ceil(props.totalImages / props.itemperpage); i++) {
        pagenumber.push(i);
    }

    return <>
        <div>
            {pagenumber.map(number => (
                <div key={number}>
                    <a href="!#"
                        onClick={() => props.paginate(number)}>
                        {number}
                    </a>
                </div>
            ))}
        </div>
    </>
}