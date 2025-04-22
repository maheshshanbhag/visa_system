import React, { useEffect } from 'react';
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
      {/* Text content section */}
      <div className='font-bold flex gap-5 flex-col sm:mt-0 mt-7 md:w-1/2'>
        <div className='flex gap-3 font-bold items-center font-serif'>
          <GiCommercialAirplane className='text-[#be0b32] text-2xl'/>
          <p className='text-[#be0b32]'>TRUSTED IMMIGRATION PARTNER</p>
        </div>
        <div className='text-5xl md:text-6xl font-serif tracking-tighter'>
          <h1>Our simple approach to</h1>
          <h1>immigration process</h1>
        </div>
        <div>
          <p className='font-light'>We are trusted immigration consultants who can handle your case and our professional registered agents will assist you with your visa application.</p>
        </div>
        <div className='mt-6 flex sm:flex-row flex-col gap-5'>
          <button className='p-4 bg-[#be0b32] text-white text-lg rounded-2xl'>Discover Solutions</button>
          <button className='p-4 bg-[#be0b32] text-white text-lg rounded-2xl'>Book A Consultation</button>
        </div>
      </div>

      {/* Image section with rotating circle */}
 
    </div>
  );
};

export default Home;
