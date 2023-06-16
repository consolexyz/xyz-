import React, { useLayoutEffect, useRef } from 'react';
import './homepage.scss';
import { gsap } from 'gsap';
import man from "../../assets/man.jpg" 
import cow from "../../assets/cow.jpg"

const  HomePage= () =>{

  const home = useRef();
  // const box = useRef();
  const heading = useRef()

  useLayoutEffect(() =>{
    let ctx = gsap.context(() => {

      gsap.from(".heading", { duration:2, opacity: 0, x: 150 })
      gsap.from(".home-images",{ duration:3,opacity:0, scale:0})
    }, home);

    return() => ctx.revert();
  },[]);


  

  return (
    <div className='homepage'>
    <div className='headings' ref={home}>
    <h1 className='heading' ref={heading}>XYZ</h1>
    <h1 className='heading photography-text' ref={heading}>PHOTOGRAPHY</h1>
    {/* <div className='home-images'> */}
      <img src={man} className='man-image home-images' alt= " a man standing" />
      <img src={cow} className='cow-image home-images' alt = " a cow standing" />
    {/* </div> */}
    {/* <div className='box' ref={box}></div> */}
    </div>
    </div>
  )
}

export default HomePage