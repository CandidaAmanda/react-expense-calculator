import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList =(props) => {

    //let expensesContent = <p style={{color:'white'}}>No Records Found</p>;

    if (props.items.length === 0)
    {
        return <p style={{color:'white'}}>No Records Found</p>;
    }

    else
    {
        return <ul className = "expenses-list">
            {props.items.map(item =>
                <ExpenseItem 
                key ={item.id}
                title ={item.title} 
                date ={item.date} 
                amount ={item.amount}/>
                )}
    </ul>
    }


    

}

export default ExpensesList;