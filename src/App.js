import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Pizza/>
    </div>
  );
}

function Pizza(){
    return (
    <div>
        <h2>Pizzas....</h2>
        <img src='pizzas/spinaci.jpg' alt='Spinach and feta'/>
        <p>Tomato, mozarella, spinach and ricotta cheese</p>
    
    </div>
    )
}

export default App;
