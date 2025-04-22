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
      <div className="md:w-1/2 relative h-[550px] md:h-[650px] flex items-center justify-center overflow-hidden">
  {/* Static container that holds both images */}
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Rotating circle wrapper */}
    <div className="absolute inset-0 flex items-center justify-center">
      <img 
        fetchpriority="high" 
        decoding="async" 
        src="https://demo.awaikenthemes.com/imigo/wp-content/uploads/2024/12/hero-country-circle-img.png" 
        alt="Country circle" 
        className="circle w-[450px] h-[450px] md:w-[700px] md:h-[700px] object-contain"
      />
    </div>
    
    {/* Person image wrapper - same position as circle but higher z-index */}
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <img 
        src="https://demo.awaikenthemes.com/imigo/wp-content/uploads/2024/12/hero-image.jpg" 
        alt="Person" 
        className="rounded-full h-[250px] w-[250px] md:h-[380px] md:w-[380px] object-cover"
      />
    </div>
  </div>
</div>
    </div>
  );
};

export default Home;
