/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <section id='RES' className='relative'  data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
        <div id='plate' className='flex justify-between gap-3 absolute '>
            <img className='w-[20%] rounded-3xl' src='../imgs/plate1.webp' alt='img' /> 
            <img className='w-[20%] rounded-3xl' src='../imgs/plate2.webp' alt='img' /> 
        </div>
        <section id='RESERVE' className='pt-[200px]'>
            <h1 className='text-black relative text-center font-bold t p-[0px] m-[0px]
                text-[200px] font-mono cursor-pointer tracking-[20px] hover:tracking-[0px]'
            >
            RESERVE
            </h1>
            <p className='text-black text-center font-bold text-[50px]'>GOMING SOON</p>
        </section>
        <div className='flex justify-between  '>
            <img className=' w-[20%] ' src='../imgs/plate3.webp' alt='img' /> 
            <img className=' w-[20%] ' src='../imgs/plate4.webp' alt='img' /> 
        </div>
    </section>    
    
    <img className='w-[90%] mx-auto relative py-5' src='../imgs/footer.webp' alt='img'   data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300"/> 
    
    <footer id='footer' className='p-[100px]  rounded-2xl bg-[#222]'>
        <h1 className='text-white text-center font-bold text-[100px]'>VITA LENTA</h1>
        <div className='flex justify-between mt-10 text-white'>
            <p>Copyright © 2025 Vita Lenta. All rights reserved</p>
            <p>Privacy Policy | Terms of Use</p>
            <p>ITALIAN RESTAURANT</p>
        </div>
    </footer>

    </>
  )
}

export default Footer
