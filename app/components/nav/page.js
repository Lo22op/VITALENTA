/* eslint-disable @next/next/no-img-element */
'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faXmark} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(prevState => !prevState);
    };

  return (
    <>
      <main className=''>
        <nav className="reltave drop-shadow-2xl pt-6  rounded" >
          <ul className="flex justify-between items-center pl-2 pr-2 text-center font-bold text-[25px]">
            <li><a  onClick={toggleMenu}  className='cursor-pointer'><FontAwesomeIcon icon={faBars} size="1x" /></a></li>
            <li><img className='w-[101px]' src='../imgs/star.svg' alt='img' /></li>
            <li><a><button className='btn p-[10px] bg-black text-white rounded-xl'> reservation </button></a></li>
          </ul>
        </nav>
      </main>

      {isMenuOpen && (
          <div className="menu w-fit h-fit bg-white rounded-2xl">
            <ul className="flex flex-col items-center text-black p-4 text-[20px]">
              <li><a className="hover:text-[25px] text-red-400 cursor-pointer"  onClick={toggleMenu} ><FontAwesomeIcon icon={faXmark} size="1x" /></a> </li>
              <li><a className="hover:text-[25px]" href="#">Home</a></li>
              <li><a className="hover:text-[25px]" href="#About">About</a></li>
              <li><a className="hover:text-[25px]" href="#Shop">Shop</a></li>
              <li><a className="hover:text-[25px]" href="#RESERVE">Contact</a></li>
            </ul>
          </div>
      )}
    </>
  );
}