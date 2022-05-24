import React, { useContext } from 'react';

import { TotalCount } from 'App'

function Total() {
  const totalCount = useContext(TotalCount);
  return (
    <div className="Total">
      {totalCount}
    </div>
  )
}

export default Total;
