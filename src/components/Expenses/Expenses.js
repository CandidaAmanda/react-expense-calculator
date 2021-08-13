import Card from '../UI/Card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';

function Expenses (props)
{
      let [filterYear, setFilterYear] =useState ('2021');
      let filteredExpenses =[];

      const filteredYearHandler =(filteredYear) => {
           // console.log('Expense.js');
           // console.log(filteredYear);
           setFilterYear(filteredYear);
      }

      filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filterYear);
      console.log(filteredExpenses);



      return (
     <Card className ="expenses">
     <ExpensesFilter onFilterApplied ={filteredYearHandler} defaultYear ={filterYear}></ExpensesFilter>
      {filteredExpenses.map(item =>
      <ExpenseItem 
      key ={item.id}
      title ={item.title} 
      date ={item.date} 
      amount ={item.amount}/>
      )}

      </Card>
      ) ;
}

export default Expenses;