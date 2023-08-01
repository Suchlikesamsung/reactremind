import './ExpenseItem.css'
function addComma(number){
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};


function Expenseitem() {
    const expenseDate = new Date(2021,2,28);
    const expenseValue = 19012
    const transValue = addComma(expenseValue)


    return <>
        <div className="expense-item">
            <div>{expenseDate.toISOString().replace('T',' ')}</div>
            <div className="expense-item__description ">
                <h2>가격</h2>
                <div className="expense-item__price">{transValue}</div>
            </div>
        </div>
    </>
}

export default Expenseitem;