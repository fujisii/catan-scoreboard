import React from 'react';
import Counter from 'components/atoms/counter';
import city from 'images/city.svg';

function BuildCity() {
  return (
    <div className="BuildCity SideBySide">
      <img src={city} alt="city" />
      <Counter />
    </div>
  )
}

export default BuildCity;
