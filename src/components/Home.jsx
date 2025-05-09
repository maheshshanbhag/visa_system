import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GiCommercialAirplane } from "react-icons/gi";
import gsap from 'gsap';

const Home = () => {
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);

  useEffect(() => {
    // Rotate the background circle
    gsap.to(".circle", {
      rotate: 360,
      duration: 25,
      repeat: -1,
      ease: "linear"
    });

    const textTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate partner intro line
    textTimeline.fromTo(".text-anim-1",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );

    // Function to split and animate heading text
    function animateHeadingLine(lineText, container) {
      if (!container || !lineText) return;
      const words = lineText.split(' ');
    
      words.forEach((word) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word-wrapper mr-[0.3ch] inline-block whitespace-nowrap';
    
        [...word].forEach((letter) => {
          const letterSpan = document.createElement('span');
          letterSpan.innerHTML = letter;
          letterSpan.className = 'heading-letter inline-block opacity-0';
          wordSpan.appendChild(letterSpan);
        });
    
        container.appendChild(wordSpan);
      });
    }

    // Animate both heading lines
    if (headingRef1.current && headingRef2.current) {
      const heading1Text = headingRef1.current.dataset.text;
      const heading2Text = headingRef2.current.dataset.text;

      headingRef1.current.innerHTML = '';
      headingRef2.current.innerHTML = '';

      const line1Wrapper = document.createElement('div');
      line1Wrapper.style.display = 'inline-block';
      headingRef1.current.appendChild(line1Wrapper);

      const line2Wrapper = document.createElement('div');
      line2Wrapper.style.display = 'inline-block';
      headingRef2.current.appendChild(line2Wrapper);

      animateHeadingLine(heading1Text, line1Wrapper);
      animateHeadingLine(heading2Text, line2Wrapper);

      // Animate each letter
      gsap.set('.heading-letter', { y: 10 });
      gsap.to('.heading-letter', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.02,
        ease: "elastic.out(1.2, 0.5)",
        delay: 0.8
      });
    }

    // Animate paragraph
    textTimeline.fromTo(".text-anim-3",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8 },
      "+=0.6"
    );

    // Animate buttons
    textTimeline.fromTo(".btn-anim",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
      "-=0.4"
    );

  }, []);

  return (
    <div className='w-full bg-zinc-200 min-h-screen md:py-25 md:px-16 py-8 px-5 flex md:flex-row flex-col gap-8 relative overflow-hidden justify-between'>
      {/* Left Text Content */}
      <div className='font-bold flex gap-5 flex-col sm:mt-0 mt-7 md:w-1/2'>

        {/* Partner Tagline */}
        <div className='flex gap-3 font-bold items-center font-serif text-anim-1'>
          <GiCommercialAirplane className='text-[#be0b32] text-2xl' />
          <p className='text-[#be0b32]'>TRUSTED IMMIGRATION PARTNER</p>
        </div>

        {/* Animated Headings */}
        <div className="text-5xl md:text-6xl font-serif tracking-tighter leading-tight gap-x-1">
          <h1 ref={headingRef1} className="flex flex-wrap" data-text="Our simple approach to"></h1>
          <h1 ref={headingRef2} className="flex flex-wrap" data-text="immigration process"></h1>

        </div>

        {/* Paragraph */}
        <p className='font-light text-anim-3'>
          We are trusted immigration consultants who can handle your case and our professional registered agents will assist you with your visa application.
        </p>

        {/* Buttons */}
        <div className='mt-6 flex sm:flex-row flex-col gap-5'>
          <Link to="/visa-enquiry">
            <button className='btn-anim p-4 bg-[#be0b32] text-white text-lg rounded-2xl w-[89vw]  cursor-pointer md:w-fit'>
              Get Started
            </button>
          </Link>
          <Link to="#">
            <button className='btn-anim p-4 bg-[#be0b32] text-white text-lg rounded-2xl w-[89vw]  cursor-pointer md:w-fit'>
              Book A Consultation
            </button>
          </Link>
        </div>

        {/* Check Visa Button */}
        <div>
          <Link to="/check-visa">
            <button className="btn-anim check-visa-button p-4 bg-[#be0b32] text-white text-lg rounded-2xl w-[89vw] sm:px-[2vw]  cursor-pointer md:w-[352px]">
              Check Visa
            </button>
          </Link>
        </div>
      </div>

      {/* Rotating Circle Image */}
      <div className='md:w-[650px] md:h-[600px] relative flex items-center justify-center bottom-3'>
        <div className='relative'>
          <img
            src="https://demo.awaikenthemes.com/imigo/wp-content/uploads/2024/12/hero-country-circle-img.png"
            className='circle md:w-[580px] md:h-[580px] h-[400px] w-[400px]'
            draggable="false"
            alt="Rotating Circle"
          />
          <img
            src="https://demo.awaikenthemes.com/imigo/wp-content/uploads/2024/12/hero-image.jpg"
            className='rounded-full w-[290px] h-[290px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[370px] md:h-[370px]'
            draggable="false"
            alt="Main Hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
