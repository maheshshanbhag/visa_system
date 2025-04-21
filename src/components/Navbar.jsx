import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  

    // Both animations will start at the same time with `0` as the position argument
    

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.from(".logo", {
      y: -50,
      opacity: 1,
      duration: 1
    },"hey")
    .from(".callLogo", {
      y: 50,
      opacity: 1,
      duration: 1
    },"hey"),
    gsap.from(".links a",{
      y:-80,
      opacity:1,
      duration:1,
      stagger:0.3
    },"=0.1"),
    gsap.from(".call",{
      x:220,
      opacity:1,
      duration:1
    },"=-0.3")
})




  useEffect(() => {
    if (menuOpen) {
      gsap.from(".sideMenu h4", {
        x: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out"
      });
    }
  }, [menuOpen])

  

  return (
    <>
      <div className="w-full px-[5vw] py-[1.7vw] flex items-center justify-between bg-zinc-50 shadow-md">
        <div className=''>
          <img
            src="https://demo.awaikenthemes.com/imigo/wp-content/uploads/2024/12/logo.svg"
            alt="logo"
            className="w-[120px] logo"
          />
        </div>

        <div className="hidden sm:flex gap-[2vw] text-[18px] font-serif font-bold links">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Services</a>
          <a href="">Blog</a>
          <a href="">Pages</a>
          <a href="">Contact Us</a>
        </div>

        <div className="hidden sm:flex gap-4 items-center call">
          <div className="p-4 py-6 bg-[#be0b32] rounded-b-full text-zinc-100 flex items-center justify-center callLogo">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none"><path d="M16.8203 22.7829C16.7102 22.7829 16.5993 22.7732 16.4892 22.7535C12.6983 22.0711 8.9193 20.0046 5.8488 16.9341C2.77827 13.8636 0.711813 10.0846 0.0294141 6.29372C-0.0991515 5.57829 0.200663 4.83416 0.793279 4.39801C1.55219 3.83948 2.36993 3.32027 3.22332 2.85571C3.78912 2.54782 4.45616 2.53065 5.00895 2.80912C6.89867 3.76166 8.1513 5.34817 8.73198 7.52446C8.88938 8.11347 8.7491 8.75209 8.35688 9.23255L7.10478 10.7647C6.90413 11.0104 6.87966 11.3492 7.04418 11.6079C8.10941 13.284 9.49892 14.6735 11.175 15.7385C11.4334 15.9032 11.7723 15.8785 12.0183 15.6781L13.5501 14.4263C14.0308 14.0338 14.6687 13.8938 15.2587 14.051C17.4347 14.6319 19.0213 15.8845 19.9738 17.7742C20.2526 18.3265 20.2354 18.9938 19.9275 19.5596C19.4627 20.413 18.9435 21.2307 18.3847 21.9896C18.0159 22.4909 17.4264 22.7829 16.8203 22.7829ZM4.17091 3.81085C4.04573 3.81085 3.91664 3.84364 3.79693 3.90897C2.9909 4.34778 2.21976 4.83734 1.5043 5.36378C1.2771 5.53118 1.16155 5.81273 1.20995 6.08133C1.84915 9.63386 3.79771 13.1869 6.69673 16.0862C9.59603 18.9852 13.1491 20.9338 16.7016 21.5729C16.9707 21.6211 17.2518 21.5055 17.4189 21.2786C17.9456 20.5632 18.4352 19.792 18.8742 18.986C18.9937 18.7663 19.0047 18.5152 18.9032 18.3142C18.0997 16.7207 16.8065 15.7052 14.9493 15.2097C14.7317 15.1519 14.4917 15.2057 14.3088 15.3551L12.7772 16.6067C12.1299 17.1355 11.227 17.1933 10.5317 16.7507C8.70615 15.5907 7.19227 14.0767 6.03203 12.2513C5.58959 11.5553 5.64736 10.6528 6.17621 10.0058L7.42807 8.47387C7.57722 8.29117 7.6316 8.05204 7.57328 7.83389C7.07774 5.9765 6.06222 4.68327 4.46891 3.87982C4.3773 3.83376 4.27554 3.81085 4.17091 3.81085Z" fill="currentColor"></path><path d="M21.3865 10.8197C21.3747 10.8197 21.3627 10.8194 21.3508 10.8186C21.02 10.7991 20.7678 10.5154 20.7873 10.1849C20.9174 7.97402 20.0966 5.81023 18.5347 4.24841C16.973 2.6866 14.8079 1.86783 12.5983 1.99587C12.2659 2.018 11.984 1.7632 11.9645 1.43242C11.945 1.10189 12.1972 0.818207 12.528 0.798687C15.0775 0.646958 17.5791 1.59664 19.3827 3.40049C21.1866 5.20433 22.1349 7.70285 21.9845 10.2551C21.9658 10.574 21.7016 10.8197 21.3865 10.8197Z" fill="currentColor"></path><path d="M18.1995 10.8197C18.1808 10.8197 18.1621 10.819 18.1431 10.8172C17.8133 10.7864 17.571 10.4942 17.6018 10.1644C17.7288 8.80276 17.2478 7.46764 16.2817 6.50156C15.3156 5.53572 13.9816 5.05427 12.6188 5.18152C12.2893 5.21144 11.9965 4.96989 11.9661 4.64016C11.9354 4.31043 12.1777 4.01816 12.5075 3.98744C14.2272 3.82739 15.9105 4.43458 17.1296 5.65358C18.3489 6.87265 18.9561 8.55756 18.7958 10.2758C18.7669 10.5865 18.5056 10.8197 18.1995 10.8197Z" fill="currentColor"></path></svg>
          </div>
          <div className="flex flex-col">
            <p className="text-[16px] font-light tracking-tight font-mono">Call Us Now</p>
            <p className="font-mono text-[18px] font-bold">+91 9181716151</p>
          </div>
        </div>

        <div className="sm:hidden text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {menuOpen && (
        <div className="sideMenu sm:hidden bg-[#be0b32] h-screen w-full py-[17vw] text-[10vw] px-5 text-white font-mono shadow-inner ">
          <h4 className="">Home</h4>
          <h4 className="">About Us</h4>
          <h4 className="">Services</h4>
          <h4 className="">Contact Us</h4>
        </div>
      )}
    </>
  );
};

export default Navbar;
