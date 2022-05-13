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

// - keyword: 「Atomic Design」「React hooks」
// - Atomic Design
//    - https://design.dena.com/design/atomic-design-%E3%82%92%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A4%E3%82%82%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B
// - React hooks
//    - keyword: usestate 複数コンポーネント
//    - https://reffect.co.jp/react/react-usecontext-understanding
//    - https://qiita.com/10mi8o/items/78e43c16610972f6c0c6

export default App;
