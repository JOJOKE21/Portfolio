import React from 'react';
import Reactimg from '../../Assets/Game1.jpg'
import Reactimg2 from '../../Assets/Calc.jpg'

export default function Portfolio() {
  return <div className='page2 padding' id="portfolio">
    <div>
    <h1 className='tex2' id='rainbow'> Projects </h1>
      <a target="_blank" href='https://jojoke21.github.io/Game-Project/'>
        <img className='photo1' src={Reactimg}></img>
      </a>
       
   
    <a target="_blank" href='https://jojoke21.github.io/Calculator-Project/'>
    <img className='photo3' src={Reactimg2}></img>
    </a>
    </div>
    <div className='tex3'>
         <h2 className='cent'>Space Rat!</h2> 
       <p className='cent'>This is the project were we had to make a game in the course of little over a week. My game consept is to survive as long as possible fighting against
       a wave of chesse. Get hit three times and you lose. Try your best to get a high score. 
       </p> 
       <p className='cent'>Langueges used: HTML, CSS, JavaScript</p>
    </div>
    <div className='tex4'>
    <h2 className='cent'>Calculator</h2>
    <p className='cent'>This is the project were we had to make a working calculator. Using the knolege that we learned so far 
      we had to make a funcioning calculator and we also had to make it unique to us the person making the calculator.
    </p> 
    <p className='cent'>Langueges used: HTML, CSS, JavaScript</p>
    </div>
  </div>
}