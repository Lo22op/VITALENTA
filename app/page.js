'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from"../app/components/Home/page"
import Line from"../app/components/Line/page"
import Menu from"../app/components/Menu/page"
import Footer from"../app/components/Footer/page"


function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <div>
      <Home />
      <Line />
      <Menu/>
      <Footer/>
      
    </div>
    </>
  )
}

export default page
