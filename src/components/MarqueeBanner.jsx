import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MarqueeBanner = () => {
  const bannerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Slide in from top
    gsap.fromTo(
      bannerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );

    // Scroll the text sideways
    const width = contentRef.current.offsetWidth;

    gsap.to(contentRef.current, {
      x: `-${width}`,
      ease: 'linear',
      duration: 15,
      repeat: -1,
    });
  }, []);

  return (
    <div
      ref={bannerRef}
      className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-3 overflow-hidden shadow-lg"
    >
      <div
        ref={contentRef}
        className="whitespace-nowrap text-white text-lg font-semibold tracking-wider flex justify-end gap-10"
      >
        ✨ Get Free Online Visa Assessment! ✨
        ⭐ Fast Process ⭐
        💼 100% Expert Support!
        ✈️ Start Your Journey Today!
        📞 Contact Us Anytime!
      </div>
    </div>
  );
};

export default MarqueeBanner;
