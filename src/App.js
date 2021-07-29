//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ExpenseItem from './components/ExpenseItem';


function App() {

  const expenses =[
    {date : new Date (2021,7,28),title : 'Shopping',amount: 2000},
    {date : new Date (2021,7,29),title : 'Lunch',amount:500},
    {date : new Date (2021,7,24),title : 'Veggies',amount: 200}

  ];

  return (
    <div className="App">
      <Navbar></Navbar>
      <ExpenseItem title ={expenses[0].title} date ={expenses[0].date} amount ={expenses[0].amount} ></ExpenseItem>
      <ExpenseItem title ={expenses[1].title} date ={expenses[1].date} amount ={expenses[1].amount} ></ExpenseItem>
      <ExpenseItem title ={expenses[2].title} date ={expenses[2].date} amount ={expenses[2].amount} ></ExpenseItem>
    </div>
  );
}

export default App;
