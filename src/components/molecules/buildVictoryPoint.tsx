import React from 'react';
import Counter from 'components/atoms/counter';
import victoryPoint from 'images/victorypoint.svg';

function BuildVictoryPoint() {
  return (
    <div className="build-victory-point side-by-side build">
      <img src={victoryPoint} alt="victoryPoint" />
      <Counter point={1} />
    </div>
  )
}

export default BuildVictoryPoint;
