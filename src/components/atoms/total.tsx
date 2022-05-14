import React from 'react';

function Total() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="Total">
      {count}
    </div>
  )
}

export default Total;
