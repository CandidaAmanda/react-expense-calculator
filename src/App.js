//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Expenses from './components/Expenses/Expenses';

function App() {

  const expenses =[
    {date : new Date (2021,7,28),title : 'Shopping',amount: 2000},
    {date : new Date (2021,7,29),title : 'Lunch',amount:500},
    {date : new Date (2021,7,24),title : 'Veggies',amount: 200}

  ];

  return (
    <div className="App">
      <Navbar></Navbar>
      <Expenses items ={expenses}></Expenses>
    </div>
  );
}

export default App;
