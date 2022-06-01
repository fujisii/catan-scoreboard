import React, { useContext, useState } from 'react';
import { TotalCount } from 'components/molecules/area'

function Counter() {
  const [count, setCount] = useState(0);
  const ctx = useContext(TotalCount);

  const countUp = () => {
    setCount(count + 1);
    ctx.setTotalCount(2);
  }

  const countDown = () => {
    setCount(count - 1);
    ctx.downTotalCount(1);
  }

  return (
    <div className="Counter SideBySide">
      <button type="button" onClick={countUp}>+</button>
      <p>{count}</p>
      <button type="button" onClick={countDown}>-</button>
    </div>
  )
}

export default Counter;
