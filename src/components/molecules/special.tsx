import React, { useState } from 'react';
import road from 'images/road.svg';
import knight from 'images/knight.svg';

function Special() {
  const [largestArmy, setIsLargestArmy] = useState(false);
  const [longestRoad, setIsLongestRoad] = useState(false);

  return (
    <div className="Special SideBySide">
      <img src={road} alt="road" />
      <img src={knight} alt="knight" />
    </div>
  )
}

export default Special;
