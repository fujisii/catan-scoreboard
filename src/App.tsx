import React from 'react';
import './App.css';
import Template from 'components/templates/template';

export const TotalCount = React.createContext(0)

// eslint-disable-next-line react/function-component-definition
function App() {

  return (
    <div className="App">
      <TotalCount.Provider value={10}>
        <Template />
      </TotalCount.Provider>
    </div>
  );
}

export default App;
