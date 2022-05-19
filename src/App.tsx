import React from 'react';
import './App.css';
import Template from 'components/templates/template';
// import Counter from 'components/atoms/counter';

// eslint-disable-next-line react/function-component-definition
function App() {
  const counter = {
    settlement: 0,
    city: 0,
    road: 0,
    knight: 0,
    victoryPoint: 0
  };
  const [count, setCount] = React.useState({
    red: counter,
    blue: counter
  });

  return (
    <div className="App">
      <Template />
    </div>
  );
}

export default App;
