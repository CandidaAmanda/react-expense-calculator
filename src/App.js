//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ExpenseItem from './components/ExpenseItem';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
