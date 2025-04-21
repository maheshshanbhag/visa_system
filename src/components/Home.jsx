import React from 'react'
import { GiCommercialAirplane } from "react-icons/gi";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Home = () => {

    useGSAP(()=>{
        gsap.to(".circle",{
            rotate:360,
            duration: 25,     // Slower spin (try 30 or more if needed)
            repeat: -1,  
            ease:"linear"
        })
    })

  return (
    <div className='w-full bg-zinc-200 md:h-[100vh] md:py-28 md:px-17 md:flex md:flex-row gap-[2vw] relative overflow-y-hidden overflow-x-hidden justify-between px-5 flex-col'>
        <div className='font-bold flex gap-5 flex-col sm:mt-0 mt-7'>
            <div className='flex gap-3 font-bold items-center font-serif'>
                <GiCommercialAirplane className='text-[#be0b32] text-2xl'/>
                <p className='text-[#be0b32] '>TRUSTED IMMIGRATION PARTNER</p>
            </div>
            <div className='text-6xl font-serif  tracking-tighter'>
                <h1>Our simple approach to</h1>
                <h1>immigration process</h1>
            </div>
            <div>
                <p className='font-light w-[]'>We are trusted immigration consultants who can handle your case and our professional registered agents will assist you with your visa application.</p>
            </div>
            <div className='sm:mt-4 flex sm:flex-row flex-col gap-5'>
                <button className='p-4 bg-[#be0b32] text-white border-2-white mr-7 text-[20px] rounded-2xl'>Discover Solutions</button>
                <button className='p-4 bg-[#be0b32] text-white border-2-white mr-7 text-[20px] rounded-2xl'>Book A Consulatation</button>
            </div>
        </div>
        <div className='md:w-[700px] md:h-[600px] p-5 '>
            <div className='bottom-10'>
                <div className='h-full w-full relative'>
                    <img fetchpriority="high" decoding="async" width="780" height="853" src="https://demo.awaikenthemes.com/imigo/wp-content/uploads/2024/12/hero-country-circle-img.png" class="attachment-full size-full wp-image-339" alt="" className='circle md:w-[780] md:h-[853] '></img>
                    <img src="https://demo.awaikenthemes.com/imigo/wp-content/uploads/2024/12/hero-image.jpg" alt="" className='rounded-full 
                        h-[250px] w-[250px] 
                        absolute 
                        bottom-[46px] left-1/2 -translate-x-1/2 
                        md:h-[410px] md:w-[410px] 
                        md:bottom-[4.8vw] md:left-[60px] md:translate-x-0' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home