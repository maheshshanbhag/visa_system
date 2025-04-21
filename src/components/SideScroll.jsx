import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const SideScroll = () => {
  useGSAP(() => {
    gsap.to('.get', {
      x: '-70%',
      scrollTrigger: {
        trigger: '.textDiv',
        start: 'top top',
        end: '+=2000',
        scrub: 5,
        pin: true,
      },
    })

    gsap.from('.link a', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.link',
        start: 'top bottom'
    },
    })
  }, [])

  return (
    <>
      <div className='min-h-[300vh]'> 
        <div className='bg-[#be0b32] p-[5vw] text-white w-full overflow-x-hidden textDiv h-screen flex items-center'>
          <h1 className='get md:text-[20vw] whitespace-nowrap font-serif text-[30vw]'>
            Get Free Online Visa Assessment!
          </h1>
        </div>

        <div className='text-2xl flex items-center justify-evenly text-[#be0b32] link pt-8 pb-8 font-light'>
          <a href=''>Option 1</a>
          <a href=''>Option 2</a>
          <a href=''>Option 3</a>
          <a href=''>Option 4</a>
        </div>
      </div>
    </>
  )
}

export default SideScroll
