import React, { useEffect, useRef } from 'react';
import './homepage.scss';
import { gsap } from 'gsap';
import { ExpoScaleEase ,} from "gsap/EasePack";

const  HomePage= () =>{


  gsap.registerPlugin(ExpoScaleEase);

  const home = useRef(null);  

  useEffect(() =>{
    
    let ctx = gsap.context(() => {

    gsap.fromTo(".heading", { autoAlpha:0.01, x: 150 , duration:3},{ autoAlpha: 1, x:0 })
    gsap.fromTo(".home-images",{ autoAlpha:0.01, delay:1,stagger: 1,scale:0, immediateRender: false},{ duration: 2, autoAlpha: 1 , scale:1, ease: "expoScale( 0.01, 1 , power2.inOut)"});
    }, home);

    return() => ctx.revert();
  },[]);


  return (
    <div className='homepage' ref={home}>
    <div className='headings'>
    <h1 className='heading'>XYZ</h1>
    <h1 className='heading photography-text' >PHOTOGRAPHY</h1>
     <div className='home-images'> 
      <img src= "https://res.cloudinary.com/mosesjayz/image/upload/v1687295658/xyz-%20photography/man_c4rfhr_1_sjehzs.jpg" className='man-image' alt= " a man standing" />
      </div>
      <div className='home-images'>
      <img src="https://res.cloudinary.com/mosesjayz/image/upload/v1687295668/xyz-%20photography/cow_sbdann_1_kdaips.jpg" className='cow-image' alt = " a cow standing" />
     </div>
    </div>
    </div>
  )
}

export default HomePage