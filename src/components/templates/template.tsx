import React, { createContext, useCallback, useState } from 'react';
import Header from 'components/organisms/header';
import Footer from 'components/organisms/footer';
import Area from 'components/molecules/area';
import Winner from 'components/atoms/winner';

type gameWinnerContext = {
  winner: boolean;
  onWinner: () => void;
};

const defaultGameWinnerContext: gameWinnerContext = {
  winner: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onWinner: () => {},
};

export const GameWinner = createContext<gameWinnerContext>(defaultGameWinnerContext);

export const useGameWinner = (): gameWinnerContext => {
  const [winner, setWinner] = useState(false);

  const onWinner = useCallback((): void => {
    setWinner(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner])

  return {
    winner,
    onWinner,
  };
}

function Template() {
  const ctx = useGameWinner();

  let winner;
  if (ctx.winner) {
    winner = <Winner />;
  }

  return (
    <GameWinner.Provider value={ctx}>
      <div className="template">
        {winner}
        <Header />
        <div className="contents side-by-side">
          <Area color="blue" />
          <Area color="red" />
          <Area color="white" />
          <Area color="orange" />
        </div>
        <Footer />
      </div>
    </GameWinner.Provider>
  )
}

export default Template;
