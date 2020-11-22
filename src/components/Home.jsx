import React from 'react';
import web from '../images/coffee-img2.png';
import {NavLink} from 'react-router-dom';
import Common from './Common';

const Home = () => {
  return(
      <>
      <Common 
          name="Grow your business with"
          imgsrc={web}
          visit="/service"
          btname="Read More"
         
      />
      
      </>
  );
}

export default Home;