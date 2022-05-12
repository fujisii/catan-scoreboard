import React from 'react';
import logo from './logo.svg';
import './App.css';

// eslint-disable-next-line react/function-component-definition
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="LineTop">
      Catan Scoreboard
    </div>
  );
}

function Main() {
  return (
    <main className="Main">
      <Area />
      <Area />
      <Area />
      <Area />
    </main>
  );
}

function Footer() {
  return (
    <footer className="Footer">
      <div className="LineBottom">
        Created by <a href="https://github.com/fujisii">fujisii</a>
      </div>
    </footer>
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
      <p className="TotalCount">0</p>
      <div className="Settlement">
        <p>開拓地</p>
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
        <p>{count}</p>
        <button type="button" onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div className="City">
        <p>都市</p>
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
        <p>{count}</p>
        <button type="button" onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div className="Road">
        <p>街道</p>
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
        <p>{count}</p>
        <button type="button" onClick={() => setCount(count - 1)}>-</button>
      </div>

    </div>
  )
}

export default App;
