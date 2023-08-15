import React, { useLayoutEffect, useRef } from 'react';
import './homepage.scss';
import { gsap } from 'gsap';
import { ExpoScaleEase ,} from "gsap/EasePack";

const  HomePage= () =>{


  gsap.registerPlugin(ExpoScaleEase);

  const home = useRef(null);  

  useLayoutEffect(() =>{
    
    let ctx = gsap.context(() => {

     gsap.fromTo(".heading", { autoAlpha:0.01, x: 150},{ duration: 2, autoAlpha: 1, x:0 })
    // gsap.from("headings", {
    //   delay: 0.8,
    //   ease: "power3.out",
    //   y:64,
    //   stagger :{
    //     amount: 0.15 
    //   }
    // });
    
  
    }, home);

    return() => ctx.revert();
  },[]);


  return (
    <div className='homepage' ref={home}>
    <div className='headings'>
    <h1 className='heading'>XYZ</h1>
    <h1 className='heading photography-text' >PHOTOGRAPHY</h1>
    </div>
    </div>
  )
}

export default HomePage