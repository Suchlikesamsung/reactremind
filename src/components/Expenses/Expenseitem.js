import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react'


// function addComma(number){
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// };


const Expenseitem = (props) => {
    // const expenseDate = new Date(2021,2,28);
    // const expenseValue = 19012
    // const transValue = addComma(expenseValue)

    const [title,setTitle] = useState(props.title)


    const clickHandler = () => {
        setTitle('hello!')
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