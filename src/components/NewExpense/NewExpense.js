import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {useState} from 'react';

const NewExpense =(props) => 
{
    let [isFormEnabled, setFormEnabledFlag]=useState(false);

    const formDisplayButtonHandler = (event) =>
    {
        event.preventDefault();
        console.log('button clicked to display form');
        setFormEnabledFlag(true);
    }

    const saveExpenseDataHandler =(enteredExpenseData) => {

        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        console.log(expenseData);
        props.onAddExpenseData(expenseData);

    }

    const formCancelHandler =() => {
        setFormEnabledFlag(false);
    }
    
    if(isFormEnabled)
    {
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel ={formCancelHandler}></ExpenseForm>
        </div>
    );
    }

    else
    {   
        
        return (
            <div className="new-expense">
            <button type="submit" onClick={formDisplayButtonHandler}>Add New Expense</button>;
            </div>
            )

    }

};

export default NewExpense;