import React, { useLayoutEffect, useRef } from 'react';
import './homepage.scss';
import { gsap } from 'gsap';
import { ExpoScaleEase ,} from "gsap/EasePack";

const  HomePage= () =>{


  gsap.registerPlugin(ExpoScaleEase);

  const home = useRef();
  // const box = useRef();
  const heading = useRef()

  useLayoutEffect(() =>{
    let ctx = gsap.context(() => {

    gsap.fromTo(".heading", { autoAlpha:0, x: 150 , duration: 2},{ autoAlpha: 1, x:0 })
    gsap.fromTo(".home-images",{ delay:3,stagger: 1,scale:0},{ duration: 2.5, autoAlpha: 1 , scale:1, ease: "expoScale( 0.01, 1 ,Power2.inOut)"});
    }, home);

    return() => ctx.revert();
  },[]);


  

  return (
    <div className='homepage'>
    <div className='headings' ref={home}>
    <h1 className='heading' ref={heading}>XYZ</h1>
    <h1 className='heading photography-text' ref={heading}>PHOTOGRAPHY</h1>
    {/* <div className='home-images'> */}
      <img src= "https://res.cloudinary.com/mosesjayz/image/upload/v1687295658/xyz-%20photography/man_c4rfhr_1_sjehzs.jpg" className='man-image home-images' alt= " a man standing" />
      <img src="https://res.cloudinary.com/mosesjayz/image/upload/v1687295668/xyz-%20photography/cow_sbdann_1_kdaips.jpg" className='cow-image home-images' alt = " a cow standing" />
    {/* </div> */}
    {/* <div className='box' ref={box}></div> */}
    </div>
    </div>
  )
}

export default HomePage