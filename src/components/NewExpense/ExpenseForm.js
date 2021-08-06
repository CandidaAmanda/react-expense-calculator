import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm =() => 
{
    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');

    //alternate method of setting state into a single object
    // const [enteredExpense, setEnteredExpense]=useState ({
    //     enteredTitle:'',
    //     setEnteredAmount:'',
    //     setEnteredDate:''
    // });

     // setEnteredExpense({
        //     ...enteredExpense,
        //     enteredTitle:event.target.value
        // });


     // setEnteredExpense((prevState)=> { 
        //     return (
            
        //     {...prevState,
        //     enteredAmount:event.target.value
        //      })
        // });


    const titleChangeHandler =(event) =>{
        setEnteredTitle(event.target.value);
    };
       
    const amountChangeHandler =(event) =>{
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler =(event) =>{
        setEnteredDate(event.target.value);
    };

    return (
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title:</label>
                        <input type="text" onChange ={titleChangeHandler}/>
                        <p>{enteredTitle}</p>
                    </div>

                    <div className="new-expense__control">
                        <label>Amount:</label>
                        <input type="number" min="0.01" step="0.01" onChange ={amountChangeHandler}/>
                        <p>{enteredAmount}</p>
                    </div>

                    <div className="new-expense__control">
                        <label>Date:</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" onChange ={dateChangeHandler}/>
                        <p>{enteredDate}</p>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
    );
};

export default ExpenseForm;