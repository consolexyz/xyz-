import React from 'react';
import FloatingImage from '../../assets/moon.png';
import './homepage.scss';
import { gsap } from "gsap";
 

const  HomePage= () =>{

  console.clear()

const randomX = random(1, 10);
const randomY = random(1, 10);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(-10, 10);

const moons = gsap.utils.toArray('.floating-moon');
moons.forEach(moon => {
  gsap.set(moon, {
    x: randomX(-1),
    y: randomY(1),
    rotation: randomAngle(-1)
  });

  moveX(moon, 1);
  moveY(moon, -1);
  rotate(moon, 1);
});

function rotate(target, direction) {
  
  gsap.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    // ease: easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  
  gsap.to(target, randomTime(), {
    x: randomX(direction),
    // ease:  Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  gsap.to(target, randomTime(), {
    y: randomY(direction),
    // ease: easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}



  return (
    <div className='homepage'>
    <img src={FloatingImage} className= "floating-moon f-1" alt = "floating moon" />
    <img src={FloatingImage} className= "floating-moon f-2" alt = "floating moon" /> 
    <img src={FloatingImage} className= "floating-moon f-3" alt = "floating moon" />
    <img src={FloatingImage} className= "floating-moon f-4" alt = "floating moon" /> 
    <img src={FloatingImage} className= "floating-moon  f-5" alt = "floating moon" /> 
    <div className='headings'>
    <h1 className='heading'>XYZ</h1>
    <h1 className='heading'>PHOTOGRAPHY</h1>
    </div>
    </div>
  )
}

export default HomePage