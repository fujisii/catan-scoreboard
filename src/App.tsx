import React, { createContext, useCallback, useState } from 'react';
import './App.css';
import Template from 'components/templates/template';

type totalContext = {
  totalCount: number;
  setTotalCount: () => void;
  downTotalCount:() => void;
}

const defaultContext: totalContext = {
  totalCount: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTotalCount: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  downTotalCount:() => {},
};

export const TotalCount = createContext<totalContext>(defaultContext);

export const useTotalCount = (): totalContext => {
  const [totalCount, setCount] = useState(0);

  const setTotalCount = useCallback((): void => {
    setCount(totalCount + 1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalCount]);

  const downTotalCount = useCallback((): void => {
    setCount(totalCount - 1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalCount]);

  return {
    totalCount,
    setTotalCount,
    downTotalCount,
  };
};

// eslint-disable-next-line react/function-component-definition
function App() {
  const ctx = useTotalCount();
  return (
    <div className="App">
      <TotalCount.Provider value={ctx}>
        <Template />
      </TotalCount.Provider>
    </div>
  );
}

export default App;
