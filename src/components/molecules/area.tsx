import React, { createContext, useState, useCallback } from 'react';
import Total from 'components/atoms/total';
import Special from 'components/molecules/special';
import BuildSettlement from 'components/molecules/buildSettlement';
import BuildCity from './buildCity';
import BuildRoad from './buildRoad';
import BuildKnight from './buildKnight';
import BuildVictoryPoint from './buildVictoryPoint';

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

function Area() {
  const ctx = useTotalCount();
  return (
    <TotalCount.Provider value={ctx}>
      <div className="Area">
        <Total />
        <Special />
        <BuildSettlement />
        <BuildCity />
        <BuildRoad />
        <BuildKnight />
        <BuildVictoryPoint />
      </div>
    </TotalCount.Provider>
  )
}

export default Area;
