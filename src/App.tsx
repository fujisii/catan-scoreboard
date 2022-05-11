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
      <button type="button" onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default App;
