import React from 'react';
import Total from 'components/atoms/total';
import Special from 'components/molecules/special';
import BuildSettlement from 'components/molecules/buildSettlement';
import BuildCity from './buildCity';
import BuildRoad from './buildRoad';
import BuildKnight from './buildKnight';
import BuildVictoryPoint from './buildVictoryPoint';

function Area() {
  return (
    <div className="Area">
      <Total />
      <Special />
      <BuildSettlement />
      <BuildCity />
      <BuildRoad />
      <BuildKnight />
      <BuildVictoryPoint />
    </div>
  )
}

export default Area;
