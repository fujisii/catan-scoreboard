import React from 'react';
import Counter from 'components/atoms/counter';
import victoryPoint from 'images/victorypoint.svg';

function BuildVictoryPoint() {
  return (
    <div className="BuildVictoryPoint side-by-side Build">
      <img src={victoryPoint} alt="victoryPoint" />
      <Counter point={1} />
    </div>
  )
}

export default BuildVictoryPoint;
