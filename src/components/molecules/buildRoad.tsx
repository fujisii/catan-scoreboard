import React from 'react';
import Counter from 'components/atoms/counter';
import road from 'images/road.svg';

function BuildRoad() {
  return (
    <div className="BuildRoad SideBySide">
      <img src={road} alt="road" />
      <Counter />
    </div>
  )
}

export default BuildRoad;
