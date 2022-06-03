import React, { createContext, useCallback, useState } from 'react';
import './App.css';
import Template from 'components/templates/template';

// eslint-disable-next-line react/function-component-definition
function App() {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  window.addEventListener('load', setVh);
  window.addEventListener('resize', setVh);

  return (
    <div className="App">
        <Template />
    </div>
  );
}

export default App;
