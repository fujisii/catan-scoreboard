import React, { useContext, useState } from 'react';
import { TotalCount } from 'components/molecules/area';
import { GameWinner } from 'components/templates/template';

function Counter({point}:{point: number}) {
  const [count, setCount] = useState(0);
  const ctx = useContext(TotalCount);
  const winner = useContext(GameWinner);

  const countUp = () => {
    setCount(count + 1);
    ctx.setTotalCount(point);

    if (ctx.totalCount + 1 === 10) {
      winner.onWinner();
    }
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
      <button type="button" onClick={countDown}>-</button>
      <p>{count}</p>
      <button type="button" onClick={countUp}>+</button>
    </div>
  )
}

export default Counter;
