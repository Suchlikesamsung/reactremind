import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';


function addComma(number){
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};


function Expenseitem(props) {
    const expenseDate = new Date(2021,2,28);
    const expenseValue = 19012
    const transValue = addComma(expenseValue)
    console.log(props)
    return <>
        <div className="expense-item">
            <ExpenseDate date={props.data.date}/>
            <div className="expense-item__description ">
                <h2>{props.data.title}</h2>
                <div className="expense-item__price">{props.data.amount}</div>
            </div>
        </div>
    </>
}

export default Expenseitem;