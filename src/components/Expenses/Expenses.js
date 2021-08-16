import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';
import ExpensesChart from './ExpensesChart';

function Expenses (props)
{
      let [filterYear, setFilterYear] =useState ('all');
      let filteredExpenses =[];

      const filteredYearHandler =(filteredYear) => {
           // console.log('Expense.js');
           // console.log(filteredYear);
           setFilterYear(filteredYear);
      }

      if (filterYear==='all')
      {
            filteredExpenses=[...props.items];
      }
      else{
      filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filterYear);
      }
      //console.log(filteredExpenses);


      return (
      
     <Card className ="expenses">
     <ExpensesFilter onFilterApplied ={filteredYearHandler} defaultYear ={filterYear}></ExpensesFilter>
      {/* {filteredExpenses.map(item =>
      <ExpenseItem 
      key ={item.id}
      title ={item.title} 
      date ={item.date} 
      amount ={item.amount}/>
      )} */}
      <ExpensesChart expenses= {filteredExpenses}></ExpensesChart>
      <ExpensesList items = {filteredExpenses}/>

      </Card>
      ) ;
}

export default Expenses;