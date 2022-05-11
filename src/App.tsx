import React from 'react';
import logo from './logo.svg';
import './App.css';

// eslint-disable-next-line react/function-component-definition
function App() {
  return (
    <div className="App">
      <Area />
      <Area />
      <Area />
      <Area />
    </div>
  );
}

function Area() {
  return (
    <div className="Area">
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default App;
