import React, { useState, useContext } from 'react';
import road from 'images/road.svg';
import knight from 'images/knight.svg';

import { TotalCount } from 'components/molecules/area'

function Special() {
  const [largestArmy, setIsLargestArmy] = useState(true);
  const [longestRoad, setIsLongestRoad] = useState(true);

  const ctx = useContext(TotalCount);

  const toggleLargestArmy = () => {
    setIsLargestArmy(!largestArmy);

    if (largestArmy) {
      ctx.setTotalCount(2);
    } else {
      ctx.downTotalCount(2);
    }
  }

  const toggleLongestRoad = () => {
    setIsLongestRoad(!longestRoad);

    if (longestRoad) {
      ctx.setTotalCount(2);
    } else {
      ctx.downTotalCount(2);
    }
  }

  return (
    <div className="Special SideBySide">
      <div onClick={toggleLongestRoad} aria-hidden="true">
        <img src={road} alt="road" />
      </div>
      <div onClick={toggleLargestArmy} aria-hidden="true">
        <img src={knight} alt="knight" />
      </div>
    </div>
  )
}

export default Special;
