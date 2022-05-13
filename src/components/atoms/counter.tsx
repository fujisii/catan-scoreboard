import React from 'react';
import settlement from '../../images/settlement.svg';

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p className="TotalCount">0</p>
      <div className="Settlement">
        <img src={settlement} alt="settlement" />
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
      <div className="Knight">
        <p>騎士</p>
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
        <p>{count}</p>
        <button type="button" onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div className="VictoryPoint">
        <p>勝利ポイント</p>
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
        <p>{count}</p>
        <button type="button" onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  )
}

export default Counter;
