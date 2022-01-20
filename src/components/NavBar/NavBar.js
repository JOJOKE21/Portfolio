import React, { useState } from 'react';
import { Link } from "react-scroll";
export default function NavBar() {
  return (
    <nav className='navBar'>
      <Link className='navLogo navBarLi' to='landingPage' smooth={true}>Home</Link>
      <div className='navBarText'>
        <ul>
          <Link className='navBarLi' to='landingPage' smooth={true}>
            Landing Page
          </Link>
          <Link className='navBarLi' to='about' smooth={true}>
            About
          </Link>
          <Link className='navBarLi' to='portfolio' smooth={true}>
            Projects
          </Link>
          <Link className='navBarLi' to='contact' smooth={true}>
            Contact
          </Link>
          <a className='navBarLi resume' target='_blank' href='https://docs.google.com/document/d/1k7qVUuoE1_k2VHOObTzjq3KAvE3w9DsoCyovAu-NLd8/edit?usp=sharing'>
            Resume
          </a>
        </ul>

      </div>
    </nav>
  )
}