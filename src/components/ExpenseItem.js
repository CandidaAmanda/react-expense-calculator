import './ExpenseItem.css';

function ExpenseItem ()
{

    return(
    <div className="expense-item" style ={{
       // borderRadius: "8px"
    }}>
        <div>Date</div>
        <div className ="expense-item__description">
            <h2>Title</h2>
            <div className="expense-item__price">Amount</div>
        </div>
    </div>
    )
}


export default ExpenseItem;