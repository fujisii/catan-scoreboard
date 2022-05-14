import React from 'react';
import Counter from 'components/atoms/counter';
import knight from 'images/knight.svg';

function BuildKnight() {
  return (
    <div className="BuildKnight SideBySide Build">
      <img src={knight} alt="knight" />
      <Counter />
    </div>
  )
}

export default BuildKnight;
