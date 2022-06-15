import React, { useContext } from 'react';

import { TotalCount } from 'components/molecules/area'

function Total() {
  const totalCount = useContext(TotalCount);
  return (
    <div className="total-counter">
      {totalCount.totalCount}
    </div>
  )
}

export default Total;
