function ExpenseDate(props) {
    const month = props.data.date.toLocaleString('ko-KR', { month: 'short' });
    const day = props.data.date.toLocaleString('ko-KR', { day: '2-digit' });
    const year = props.data.date.getFullYear();
    return <>
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    </>
}


export default ExpenseDate;
