import React from 'react';
import Hero from '../components/Hero';
import Todays_Picks from '../components/Todays_Picks';
import Featured from '../components/Featured';


function HomePage() {
  return (
    <div>
      <Hero />
      <Todays_Picks />
      <Featured />
      
    </div>
  );
}

export default HomePage;