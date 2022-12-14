
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(counter +1)
  }
  const decrement = () => {
    setCounter( counter -1)
  }
  return (
    <div className="App">
     <h1>{counter}</h1>
     <button onClick={increment}>increment</button>
     <button onClick={decrement}>decrement</button>

    </div>
  );
}

export default App;
