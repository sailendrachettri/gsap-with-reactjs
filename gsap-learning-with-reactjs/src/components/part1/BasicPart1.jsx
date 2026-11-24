import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react';
gsap.registerPlugin(useGSAP);


const BasicPart1 = () => {
    const container = useRef();

    useGSAP(()=>{
        gsap.to('.heading', {
            duration: 1,
            delay: 1,
            y: -100,
        })
    }, {scope: container})
  return (
    <>
    <div ref={container} className='min-h-screen overflow-x-hidden w-full flex items-center justify-center'>
        <div className='text-7xl heading'>Basic gsap setup with heading animate</div>
    </div>
    </>
  )
}

export default BasicPart1