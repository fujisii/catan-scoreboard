import React from 'react';
import Header from 'components/organisms/header';
import Footer from 'components/organisms/footer';
import Area from 'components/molecules/area';

function Template() {
  return (
    <div className="Template">
      <Header />
      <div className="Contents SideBySide">
        <Area color="Blue" />
        <Area color="Red" />
        <Area color="White" />
        <Area color="Orange" />
      </div>
      <Footer />
    </div>
  )
}

export default Template;
