import React from 'react';
import './App.css';
import Template from 'components/templates/template';

const total = {
  totalCount: 0,
  setTotalCount: () => {
    console.log('test');
  }
};

export const TotalCount = React.createContext(total);

// eslint-disable-next-line react/function-component-definition
function App() {

  return (
    <div className="App">
      <TotalCount.Provider value={total}>
        <Template />
      </TotalCount.Provider>
    </div>
  );
}

export default App;
