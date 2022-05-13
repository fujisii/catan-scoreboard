import React from 'react';

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

export default Counter;
