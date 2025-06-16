import React, { useState } from 'react';
import './App.css';

function App() {
  // Utworzenie stanu dla przechowywania liczby kliknięć
  const [count, setCount] = useState(0);

  // Funkcja, która inkrementuje wartość licznika
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Liczba kliknięć: {count}</p>
        <button onClick={handleIncrement}>Dodaj</button>
        <button onClick={handleDecrement}>-</button>
      </header>
    </div>
  );
}

export default App;
