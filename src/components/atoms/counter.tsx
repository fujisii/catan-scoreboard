import React, { useContext, useState } from 'react';
import { TotalCount } from 'components/molecules/area'

function Counter({point}:{point: number}) {
  const [count, setCount] = useState(0);
  const ctx = useContext(TotalCount);

  const countUp = () => {
    setCount(count + 1);
    ctx.setTotalCount(point);
  }

  const countDown = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
    ctx.downTotalCount(point);
  }

  return (
    <div className="counter side-by-side">
      <button type="button" onClick={countUp}>+</button>
      <p>{count}</p>
      <button type="button" onClick={countDown}>-</button>
    </div>
  )
}

export default Counter;
