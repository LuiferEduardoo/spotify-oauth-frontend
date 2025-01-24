import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from '../../components/Footer';

const Landing: React.FC = () => {
  return (
    <main>
      <Header />
      <Main />
      <Footer />
    </main>
  );
};

export default Landing;