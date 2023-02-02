import React from 'react';

import './ExpenseItem.css';
import ExpenseDate from '../Expenses/ExpenseDate';

const ExpenseItem = (props) => {

    // const [newTitle, setNewTitle] = useState("hii");
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle(newTitle);
    // }
    // const changeHandler = (event) => {
    //     setNewTitle(event.target.value);
    // }

    return (
        <div className='expense-item'>
             <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h1>{props.title}</h1>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <input type="text" value={newTitle} onChange={changeHandler}/>
            <button onClick={clickHandler}>Change Title</button> */}
        </div>
    )
}

export default ExpenseItem;