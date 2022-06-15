import React from 'react';
import Counter from 'components/atoms/counter';
import city from 'images/city.svg';

function BuildCity() {
  return (
    <div className="BuildCity side-by-side build">
      <img src={city} alt="city" />
      <Counter point={2} />
    </div>
  )
}

export default BuildCity;
