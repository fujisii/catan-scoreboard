import React from 'react';
import './App.css';
import Template from 'components/templates/template';

// eslint-disable-next-line react/function-component-definition
function App() {
  // const setVh = () => {
  //   const vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty('--vh', `${vh}px`);
  // };

  // window.addEventListener('load', setVh);
  // window.addEventListener('resize', setVh);

  // iOSスクロール抑制
  const disableScroll = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  }
  document.addEventListener('touchmove', disableScroll, { passive: false });

  return (
    <div className="app">
        <Template />
    </div>
  );
}

export default App;
