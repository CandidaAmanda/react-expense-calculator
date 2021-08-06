import { useState } from 'react';
import './ExpenseItem.css';
import  ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem = (props) =>
{

    const [titleName,setTitle]=useState(props.title);


    const clickHandler =()=> {
        

        setTitle ('Myntra Shopping');
    
        // setTitle(prevState => { 
        //     console.log (prevState);
        //     return 'Myntra';
        //   });
        
    };

    return(
    <Card className="expense-item">

        <ExpenseDate date={props.date}></ExpenseDate>

        <div className ="expense-item__description">
            <h2>{titleName}</h2>
            <div className="expense-item__price">{props.amount}</div>
            <button onClick={clickHandler}>Change title</button>
        </div>
    </Card>
    )
}


export default ExpenseItem;