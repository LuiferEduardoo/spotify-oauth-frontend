import React from 'react';

import Header from './Header';
import ProfileCard from './ProfileCard';

const Dashboard: React.FC = () => {

  return (
    <main>
      <Header />
      <section className="flex justify-center items-center h-screen">
        <ProfileCard />
      </section>
    </main>
  );
};

export default Dashboard;