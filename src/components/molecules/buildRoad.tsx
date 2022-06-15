import React from 'react';
import Counter from 'components/atoms/counter';
import road from 'images/road.svg';

function BuildRoad() {
  return (
    <div className="build-road side-by-side build">
      <img src={road} alt="road" />
      <Counter point={0} />
    </div>
  )
}

export default BuildRoad;
