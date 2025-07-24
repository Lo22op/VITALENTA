/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './Home.css'

function Home() {
  return (
    <main>
      <div id='home' className='pt-5 relative'>
        <h1 className='text-[170px] font-bold text-center' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" >  VITALENTA </h1>
        <img className='pt-[10px] rounded-3xl' src='../imgs/home.webp' alt='img'  data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" /> 
      </div>
      <div id='About'>
        <div id='One' className='py-16 flex justify-around items-center gap-3' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <p className='text-black text-center font-bold text-[50px] w-[25%]'>
            ABOUT OUR RESTAURANT
          </p>
          <p className='text-black w-[52%] text-[25px]' >
            Vita Lenta was founded in 1944 in the heart of Rome by the now legendary chef Gianluca D’Agostino. 
            Chef D’Agostino, known for his exceptional culinary skills and deep love for traditional Italian cuisine, 
            brought years of experience and a commitment to authenticity to the restaurant. His vision was to blend the rich 
            flavors of Italy with modern dining experiences, creating a unique culinary journey for every guest.
          </p>
        </div>
        <img className='py-[6px] rounded-3xl' src='../imgs/family.webp' alt='img' data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="200" /> 
        
        <div id='Two'  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"  className='py-16 flex justify-around items-center gap-3'>
          <p className='text-black text-center font-bold text-[50px] w-[25%]'>
            ABOUT OUR RESTAURANT
          </p>
          <p className='text-black w-[52%] text-[25px]'>
            We value food for uniting people. 
            By focusing on Italian cuisine traditions with fresh, quality ingredients and sustainable practices. 
            Chefs craft dishes reflecting Italy&risque;s culinary legacy.
            <span>
              Our interactive menu and immersive dining environments engage all senses for a unique and memorable dining experience. 
              Traditional recipes are presented in a modern way to offer exceptional dining.
            </span>
          </p>
        </div>
      </div>
      <div id='Img' className='flex gap-3'>
        <img className='py-[6px] w-[50%] rounded-3xl' src='../imgs/five1.webp' alt='img' data-aos="fade-left" data-aos-duration="2000" data-aos-delay="300" />    
        <img className='py-[6px] w-[50%] rounded-3xl' src='../imgs/five2.webp' alt='img' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300"/> 
      </div>
    </main>
  )
}

export default Home
