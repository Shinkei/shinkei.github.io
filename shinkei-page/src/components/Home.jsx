import React from 'react';
import Header from './Header';
import Headline from './Headline';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';

const Home = () => (
  <div>
    <Header />
    <div className="container main_container">
      <div className="content_inner_bg row m0" >
        <Headline />
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  </div>
);

export default Home;
