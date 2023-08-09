import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';


// function addComma(number){
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// };


function Expenseitem(props) {
    // const expenseDate = new Date(2021,2,28);
    // const expenseValue = 19012
    // const transValue = addComma(expenseValue)
    console.log(props)
    return <>
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description ">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
    </>
}

export default Expenseitem;