/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './Line.css'

function Line() {
  return (
    <>
        <section id='Shop' className='relative'>

            <section id='BREAKFAST' className='flex items-center gap-[30px] mt-[180px]'>
                <img className='py-[6px] w-[50%] rounded-3xl' src='../imgs/coffee.webp' alt='img' data-aos="fade-left" data-aos-duration="2000" data-aos-delay="300" />
                <h1 className='text-black text-center font-bold text-[50px] '>BREAKFAST  </h1>
                <img className='py-[6px] w-[50%] rounded-3xl' src='../imgs/breakfast2.webp' alt='img' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300" />
            </section>
            <section id='LUNCH' className='flex items-center gap-[30px] mt-[180px]'>
                <img className='py-[6px] w-[50%] rounded-3xl' src='../imgs/lunch3.webp' alt='img' data-aos="fade-left" data-aos-duration="2000" data-aos-delay="300" />
                <h1 className='text-black text-center font-bold text-[50px] '> LUNCH </h1>
                <img className='py-[6px] w-[50%] rounded-3xl' src='../imgs/lunch4.webp' alt='img' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300"/>
            </section>
            <section id='DINNER' className='flex items-center gap-[30px] mt-[180px]'>
                <img className='py-[6px] w-[50%] rounded-3xl' src='../imgs/dinner1.webp' alt='img' data-aos="fade-left" data-aos-duration="2000" data-aos-delay="300"/>
                <h1 className='text-black text-center font-bold text-[50px] '> DINNER </h1>
                <img className='py-[6px] w-[50%] rounded-3xl' src='../imgs/dinner2.webp' alt='img' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300"/>
            </section>
            <div className=' parallax'>
                <div className='scroller  mt-[180px]'>
                <span>CULINARY SENSATIONS </span>
                <span>CULINARY SENSATIONS </span>
                <span>CULINARY SENSATIONS </span>
                <span>CULINARY SENSATIONS </span>
                </div>
            </div>
            <div className=' mt-[-142px] parallax'>
                <div className='scrollerx  mt-[180px]'>
                <span>CULINARY SENSATIONS </span>
                <span>CULINARY SENSATIONS </span>
                <span>CULINARY SENSATIONS </span>
                <span>CULINARY SENSATIONS </span>
                </div>
            </div>
            
        </section>
 
    </>
  )
}

export default Line


