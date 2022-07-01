import React, { useContext } from 'react';

import { TotalCount } from 'components/molecules/area';

import Winner from 'components/atoms/winner';

function Total() {
  const totalCount = useContext(TotalCount);

  let winner;
  if (totalCount.totalCount === 10) {
    winner = <Winner />;
  }
  return (
    <div className="total">
      {totalCount.totalCount}
      {winner}
    </div>
  )
}

export default Total;
