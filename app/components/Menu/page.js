/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './Menu.css'

function Menu() {
  return (
   <>
      <section id='bottle' className='relative py-28' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">

      <div id='IMG' className='flex gap-3'>
          <img className='imtr py-[6px] w-[50%] rounded-3xl blur-[5px] t hover:blur-none ' src='../img/olive2.webp' alt='img' />    
          <img className='py-[6px] w-[50%] rounded-3xl blur-[5px] t hover:blur-none ' src='../img/olive3.webp' alt='img' /> 
      </div>

      <div id='Box_title'  className='flex gap-3 absolute top-[55%]'>       
        <div id='olive'  className='w-[50%]'>
          <div>
            <h1 className='font-bold text-[50px]'>  Red Wine </h1>
            <p className='py-5 text-[25px]'>
              Our red wine is crafted from carefully selected grapes, 
              delivering a robust and elegant flavor profile. 
              Each bottle reflects our dedication to excellence and heritage.
            </p>
            <hr />
          </div>
          <div id='Box'>
          <button className='p-[10px] bg-black text-white rounded-xl'>REORDER</button>
          <p>$299</p>
          </div>
        </div>
        <div id='olive' className='w-[50%]'>
          <div>
            <h1 className='font-bold text-[50px]' > C o l d P r e s s e d O l i v e O i l</h1>
            <p className='py-5 text-[25px]'>
              Our olive oil is more than a product; it’s a piece of our family heritage. Made with love in the heart of Italy, 
              this 100% organic olive oil is the result of careful, handpicked olives from our family groves.
            </p>
            <hr />
          </div>
          <div id='Box'>
            <button className='p-[10px] bg-black text-white rounded-xl'>REORDER</button>
            <p>$399</p>
          </div>
        </div>
      </div>

      </section>

      <div className='parallax'  data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
        <div className='scroller  mt-[180px]'>
          <span>OUR PRODUCTS</span>
          <span>OUR PRODUCTS</span>
          <span>OUR PRODUCTS</span>
          <span>OUR PRODUCTS</span>
        </div>
      </div>
      <div className='parallax'  data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300"> 
        <div className='scrollerx '>
          <span>VITA LENTA</span>
          <span>VITA LENTA</span>
          <span>VITA LENTA</span>
          <span>VITA LENTA</span>
          <span>VITA LENTA</span>
        </div>
      </div>
   </>
  )
}

export default Menu