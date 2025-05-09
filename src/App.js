import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <button data-testid="minus-button" onClick={() => setCount((prev) => prev - 1)} disabled={disabled}>-</button>
        <button data-testid="plus-button" onClick={() => setCount((prev) => prev + 1)} disabled={disabled}>+</button>
        <button data-testid="on-off-button" style={{ backgroundColor: "blue" }} onClick={() => setDisabled(prev => !prev)}>On/Off</button>
      </header>
    </div>
  );
}

export default App;
