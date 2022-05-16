import React from 'react';
import Counter from 'components/atoms/counter';
import victoryPoint from 'images/victorypoint.svg';

function BuildVictoryPoint() {
  return (
    <div className="BuildVictoryPoint SideBySide Build">
      <img src={victoryPoint} alt="victoryPoint" />
      <Counter />
    </div>
  )
}

export default BuildVictoryPoint;
