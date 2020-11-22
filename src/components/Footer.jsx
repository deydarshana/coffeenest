import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
    return(
 <>
   <footer className="w-100 bg-light text-center mt-3">
       <p>&copy; {year} Coffeenest. All rights reserved</p>
   </footer>
 </>
    );
}

export default Footer;