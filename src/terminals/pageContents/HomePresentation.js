import React from 'react';
import HomeHero from './HomeHero.js';
import HomeFocus from './HomeFocus.js';
import HomeContent from './HomeContent.js';
import HomeFooter from './HomeFooter.js';


const HomePresentation = () => {
  return (
    <div className="screen">
      <HomeHero />
      <HomeFocus />
      <HomeContent />
      <HomeFooter />
    </div> 
  );
};

export default HomePresentation;
