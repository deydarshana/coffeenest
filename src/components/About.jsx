import React from 'react';
import web from '../images/coffee-about.png';
import {NavLink} from 'react-router-dom';
import Common from './Common';

const About = () => {
  return(
      <>
          <Common 
        name="Welcome to About Page of" 
        imgsrc={web} 
        visit="/contact" 
        btname="Contact Now" />
      </>
  );
}

export default About;