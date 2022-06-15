import React from 'react';
import Header from 'components/organisms/header';
import Footer from 'components/organisms/footer';
import Area from 'components/molecules/area';

function Template() {
  return (
    <div className="Template">
      <Header />
      <div className="Contents side-by-side">
        <Area color="blue" />
        <Area color="red" />
        <Area color="white" />
        <Area color="orange" />
      </div>
      <Footer />
    </div>
  )
}

export default Template;
