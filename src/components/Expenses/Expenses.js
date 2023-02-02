import './Expenses.css';
import ExpenseItem from '../Expenses/ExpenseItem';

const Expenses = (props)=> {
    return (
        <div className="expenses">
            {
                props.item.map(
                    expense => (
                        <ExpenseItem 
                        key={ expense.id }
                        date={expense.date} 
                        title={expense.title} amount={expense.amount} />
                    )
                )
            }
            
        </div>
    );
}

export default Expenses;