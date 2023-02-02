import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';


let DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'School Fee',
    amount: 250,
    date: new Date(2021, 5, 12)
  },
  {
    id: 'e2',
    title: 'Books',
    amount: 230,
    date: new Date(2021, 2, 22)
  },
  {
    id: 'e3',
    title: 'House Rent',
    amount: 700,
    date: new Date(2021, 4, 2)
  },
  {
    id: 'e4',
    title: 'Food',
    amount: 540,
    date: new Date(2021, 5, 5)
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  //fetching data through API

  // function fetchData() {
  //   fetch('write url ').then(
  //     response => {
  //       return response.json();
  //     }
  //   ).then(
  //     data => {
  //       console.log(data);
  //       setExpenses(data);
  //     }
  //   )
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const addExpenseHandler = (expense) => {
    //console.log(expense);
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);

    //to reflect the data into the data base using post method

    // fetch('passed the url where u want to store the data' , {
    //   method:'POST',
    //   body: JSON.stringify(expense),
    //   headers: {
    //     'content-Type' : 'application/json'
    //   }
    // }).then(
    //   response => {
    //     fetchData();
    //   }
    // );

  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
