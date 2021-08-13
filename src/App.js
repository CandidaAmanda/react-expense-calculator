//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES =[
  {id: 'e1', date : new Date (2021,7,28),title : 'Shopping',amount: 2000},
  {id: 'e2', date : new Date (2021,7,29),title : 'Lunch',amount:500},
  {id: 'e3', date : new Date (2020,7,24),title : 'Veggies',amount: 200},
  {id: 'e4', date : new Date (2019,7,29),title : 'Market',amount:500},
  {id: 'e5', date : new Date (2022,7,24),title : 'Party',amount: 200}


];

function App() {

  const [expenses,setExpense]=useState(DUMMY_EXPENSES);
  
  const newExpenseHandler =(newExpenseData) => {
    //console.log ('In App.js');
    //console.log (newExpenseData);
    //addExpense([newExpenseData, ...expenses]);
    setExpense(
     prevExpense => {
      console.log (prevExpense);
     return [newExpenseData, ...prevExpense];
     }
    );

  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <NewExpense onAddExpenseData={newExpenseHandler}></NewExpense>
      <Expenses items ={expenses}></Expenses>
    </div>
  );
}

export default App;
