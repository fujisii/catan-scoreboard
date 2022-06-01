import React from 'react';
import Counter from 'components/atoms/counter';
import settlement from 'images/settlement.svg';

function BuildSettlement() {
  return (
    <div className="BuildSettlement SideBySide Build">
      <img src={settlement} alt="settlement" />
      <Counter increment={2} />
    </div>
  )
}

export default BuildSettlement;
