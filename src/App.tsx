import React, { useCallback, useState } from 'react';
import './App.css';
import Template from 'components/templates/template';
import Counter from 'components/atoms/counter';

type totalContext = {
  totalCount: number;
  setTotalCount: () => void;
}

const defaultContext: totalContext = {
  totalCount: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTotalCount: () => {}
};

export const TotalCount = React.createContext<totalContext>(defaultContext);

export const useTotalCount = (): totalContext => {
  const [count, setCount] = useState(0);

  const setTotalCount = useCallback((): void => {
    setCount(count + 1);
  }, []);

  return {
    count, // TODO
    setTotalCount
  };
};

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
