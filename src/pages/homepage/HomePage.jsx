import React, { useLayoutEffect, useRef } from 'react';
import './homepage.scss';
import { gsap } from 'gsap';
import { ExpoScaleEase ,} from "gsap/EasePack";

const  HomePage= () =>{


  gsap.registerPlugin(ExpoScaleEase);

  const home = useRef(null);  

  useLayoutEffect(() =>{
    
    let ctx = gsap.context(() => {

    gsap.fromTo(".heading", { autoAlpha:0.01, x: 150 , duration:3},{ autoAlpha: 1, x:0 })
    gsap.fromTo(".home-images",{ autoAlpha:0.01, delay:1,stagger: 1,scale:0},{ duration: 1.5, autoAlpha: 1 , scale:1, ease: "expoScale( 0.01, 1 , power2.inOut)"});
    }, home);

    return() => ctx.revert();
  },[]);


  return (
    <div className='homepage' ref={home}>
    <div className='headings'>
    <h1 className='heading'>XYZ</h1>
    <h1 className='heading photography-text' >PHOTOGRAPHY</h1>
     <div className='home-images'> 
      <img src= "https://res.cloudinary.com/mosesjayz/image/upload/v1689204391/xyz-%20photography/man2_1_fhbxzy.jpg" className='man-image' alt= " a man standing" />
      </div>
      <div className='home-images'>
      <img src="https://res.cloudinary.com/mosesjayz/image/upload/v1689204398/xyz-%20photography/cow2_1_w4mfkg.jpg" className='cow-image' alt = " a cow standing" />
     </div>
    </div>
    </div>
  )
}

export default HomePage