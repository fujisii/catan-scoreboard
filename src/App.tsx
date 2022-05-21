import React from 'react';
import './App.css';
import Template from 'components/templates/template';

export const TotalCount = React.createContext({})

// eslint-disable-next-line react/function-component-definition
function App() {

  return (
    <div className="App">
      <Template />
    </div>
  );
}

export default App;
