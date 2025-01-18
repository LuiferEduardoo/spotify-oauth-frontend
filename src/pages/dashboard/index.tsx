import React from 'react';

import Header from './Header';
import ProfileCard from './ProfileCard';
import UserStats from './UserStats';

const Dashboard: React.FC = () => {

  return (
    <main>
      <Header />
      <section className="flex justify-center items-center py-10">
        <ProfileCard />
      </section>
      <UserStats />
    </main>
  );
};

export default Dashboard;