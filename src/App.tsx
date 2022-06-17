import React from 'react';
import './App.css';
import Template from 'components/templates/template';

function App() {
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
