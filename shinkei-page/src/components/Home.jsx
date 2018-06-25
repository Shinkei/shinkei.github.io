import React from 'react';
import Header from './Header';
import Headline from './Headline';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => (
  <div>
    <Header />
    <div className="container main_container">
      <div className="content_inner_bg row m0" >
        <Headline />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
