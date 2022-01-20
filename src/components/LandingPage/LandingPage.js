import React from 'react';
import Reactimg from '../../Assets/Me.jpg'
export default function LandingPage() {
  return (
    <div className='page' id="landingPage">
      <h1 className='text2'>Welcome to my portfolio</h1>
      <h3 className='text3'>Software Developer</h3>
      <div className='con'>
        This portfolio will tell you more about me,
        how I will reach my goal to becoming a Software Developer and
        how I will use Software Development to better my future.
        </div>
      <img className='photo' src={Reactimg}></img>
    </div>

  )
}
