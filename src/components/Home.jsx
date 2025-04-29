import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiCommercialAirplane } from "react-icons/gi";
import gsap from 'gsap';

const Home = () => {

  useEffect(() => {
    // GSAP animation for rotating the circle
    gsap.to(".circle", {
      rotate: 360,
      duration: 25,
      repeat: -1,
      ease: "linear"
    });
  }, []);

  return (
    <div className='w-full bg-zinc-200 min-h-screen md:py-28 md:px-16 py-8 px-5 flex md:flex-row flex-col gap-8 relative overflow-hidden justify-between'>

      {/* Text content */}
      <div className='font-bold flex gap-5 flex-col sm:mt-0 mt-7 md:w-1/2'>
        <div className='flex gap-3 font-bold items-center font-serif'>
          <GiCommercialAirplane className='text-[#be0b32] text-2xl'/>
          <p className='text-[#be0b32]'>TRUSTED IMMIGRATION PARTNER</p>
        </div>

        <div className='text-5xl md:text-6xl font-serif tracking-tighter'>
          <h1>Our simple approach to</h1>
          <h1>immigration process</h1>
        </div>

        <p className='font-light'>
          We are trusted immigration consultants who can handle your case and our professional registered agents will assist you with your visa application.
        </p>

        <div className='mt-6 flex sm:flex-row flex-col gap-5 '>
        <Link to="/visa-enquiry">
          <button className='p-4 bg-[#be0b32] text-white text-lg rounded-2xl w-[89vw] md:w-fit'>Get Started</button>
        </Link>   
        <Link >       
          <button className='p-4 bg-[#be0b32] text-white text-lg rounded-2xl w-[89vw] md:w-fit'>Book A Consultation</button>
          </Link>
        </div>
        <div className=''>
          <Link className='' to="/check-visa">
          <button className="check-visa-button p-4 bg-[#be0b32] text-white text-lg rounded-2xl w-[89vw] sm:px-[2vw] md:w-[352px]">
            Check Visa
          </button>
        </Link>
        </div>
      </div>

      {/* Image section with rotating circle */}
      <div className='md:w-[650px] md:h-[600px] relative flex items-center justify-center bottom-3'>
        <div className='relative'>
          <img 
            src="https://demo.awaikenthemes.com/imigo/wp-content/uploads/2024/12/hero-country-circle-img.png" 
            className='circle md:w-[580px] md:h-[580px] h-[400px] w-[400px]' 
            draggable="false"
          />
          <img 
            src="https://demo.awaikenthemes.com/imigo/wp-content/uploads/2024/12/hero-image.jpg" 
            className='rounded-full w-[290px] h-[290px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[370px] md:h-[370px]' 
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
