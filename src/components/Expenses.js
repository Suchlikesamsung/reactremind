import Expenseitem from './Expenseitem';
import './Expenses.css'
import ExpenseDate from './ExpenseDate';


function Expense(props) {
    return (
        <div className='expenses'>
            {props.items.map((item) => (
                <Expenseitem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </div>
    );
}

export default Expense;