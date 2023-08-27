import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


// function addComma(number){
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// };


function Expenseitem(props) {
    // const expenseDate = new Date(2021,2,28);
    // const expenseValue = 19012
    // const transValue = addComma(expenseValue)
    let title = props.title;
    const clickHandler = () => {
        title = '됫나용?'
    }
    console.log(props)
    return <>
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description ">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>change Title</button>
        </Card>
    </>
}

export default Expenseitem;