import React, { createContext, useContext } from 'react';
import Header from 'components/organisms/header';
import Footer from 'components/organisms/footer';
import Area from 'components/molecules/area';
import Winner from 'components/atoms/winner';

type gameWinnerContext = {
  isWinner: boolean;
};

const defaultGameWinnerContext: gameWinnerContext = {
  isWinner: false
};

export const GameWinner = createContext<gameWinnerContext>(defaultGameWinnerContext);

function Template() {
  const ctx = useContext(GameWinner);

  let winner;
  if (ctx.isWinner) {
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
