import React from 'react';
import './App.css';
import Template from 'components/templates/template';
// import Counter from 'components/atoms/counter';

import settlement from 'images/settlement.svg';
import city from 'images/city.svg';

export const Count = React.createContext({})

// eslint-disable-next-line react/function-component-definition
function App() {
  const counter = {
    total: 0,
    longestRoad: 0,
    largestArmy: 0,
    settlement: 0,
    city: 0,
    road: 0,
    knight: 0,
    victoryPoint: 0
  };
  const [count, setCount] = React.useState({
    red: counter,
    blue: counter
  });

  const countUp = () => {
    setCount({ ...count, red: {
      total: 0,
      longestRoad: 0,
      largestArmy: 0,
      settlement: count.red.settlement + 1,
      city: 0,
      road: 0,
      knight: 0,
      victoryPoint: 0
    } });
    console.log('countUp');
  };

  const countDown = () => {
    console.log('countDown');
  };

  return (
    <div className="App">
      {/* <div className="Area">
        <div className="Total">
          {count.red.total}
        </div>
        <div className="BuildSettlement SideBySide Build">
          <img src={settlement} alt="settlement" />
          <div className="Counter SideBySide">
            <button type="button" onClick={countUp}>+</button>
            <p>{count.red.settlement}</p>
            <button type="button" onClick={countDown}>-</button>
          </div>
        </div>
        <div className="BuildCity SideBySide Build">
          <img src={city} alt="city" />
          <div className="Counter SideBySide">
            <button type="button" onClick={countUp}>+</button>
            <p>{count.red.city}</p>
            <button type="button" onClick={countDown}>-</button>
          </div>
        </div>
      </div> */}
      <Template />
    </div>
  );
}

export default App;
