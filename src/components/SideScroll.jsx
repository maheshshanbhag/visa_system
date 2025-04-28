import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const SideScroll = () => {
  const containerRef = useRef(null);
  const airplaneRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    if (containerRef.current && airplaneRef.current && textRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=2000',
          scrub: 1,
          pin: true,
        },
      });

      tl.fromTo(
        airplaneRef.current,
        {
          left: '10%',
          top: '50%',
          xPercent: -50,
          yPercent: -50,
          scale: 1,
          rotation: 0,
        },
        {
          left: '145%',
          top: '50%',
          xPercent: -50,
          yPercent: -50,
          scale: 1.2,
          rotation: 5,
          ease: 'power1.inOut',
          duration: 1,
        },
        0
      );

      tl.fromTo(
        '.text-character',
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.01,
          ease: 'power2.out',
          duration: 0.5,
        },
        0.1
      );
    }

    gsap.from('.link a', {
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.link',
        start: 'top bottom',
      },
    });
  }, []);

  const textContentDesktop = 'Get Free Visa-Online!';
  const textContentMobile = ['Get Free', 'Visa Online!'];

  return (
    <>
      <div  className="min-h-[300vh]">
        <div
          ref={containerRef}
          className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center"
        >
          {/* Background Text */}
          <div
            ref={textRef}
            className="absolute text-blue-700 font-serif tracking-wider z-0 flex flex-col items-center"
            style={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
              fontWeight: '700',
              letterSpacing: '2px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Desktop View (Single Line) */}
            <h1 className="hidden md:block text-5xl md:text-7xl lg:text-9xl whitespace-nowrap">
              {textContentDesktop.split('').map((char, index) => (
                <span key={index} className="text-character inline-block">
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>

            {/* Mobile View (Two Lines) */}
            <div className="md:hidden absolute top-1/2 transform -translate-y-1/2 text-6xl sm:text-6xl leading-tight  flex flex-col">
              <div className="whitespace-nowrap text-center">
                {textContentMobile[0].split('').map((char, index) => (
                  <span key={index} className="text-character inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>
              <div className="whitespace-nowrap text-end">
                {textContentMobile[1].split('').map((char, index) => (
                  <span key={index} className="text-character ">
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Airplane */}
          <div
            ref={airplaneRef}
            className="absolute z-10"
            style={{
              left: '10%',
              top: '0%',
              transform: 'translate(-50%, -50%)',
              width: '350px',
              height: 'auto',
              filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.6))',
            }}
          >
            <img
              className="w-[300px] h-[40vh] sm:w-[400px] sm:h-[60vh]"
              src="https://i.postimg.cc/GhqPVwVY/plane-removebg-preview.png"
              alt="Airplane"
            />
          </div>
        </div>

        {/* Options Section */}
        <div className="text-xl md:text-2xl flex items-center justify-evenly text-blue-500 link py-8 font-semibold">
          <a href="#" className="hover:text-blue-500 transition-colors duration-300">
            Option 1
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors duration-300">
            Option 2
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors duration-300">
            Option 3
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors duration-300">
            Option 4
          </a>
        </div>
      </div>
    </>
  );
};

export default SideScroll;
