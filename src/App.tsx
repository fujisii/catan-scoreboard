import { VFC } from 'react';
import logo from './logo.svg';
import './App.css';

// eslint-disable-next-line react/function-component-definition
const App: VFC = () => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className="TotalCount">0</p>
        <button type="button" className="PlusButton" onClick={countUp}>+</button>
        <button type="button" className="MinusButton" onClick={countDown}>-</button>
      </header>
    </div>
);
function countUp() {
  console.log('count up');
}
function countDown() {
  console.log('count down');
}
// TODO: https://typescriptbook.jp/tutorials/react-like-button-tutorial

export default App;
