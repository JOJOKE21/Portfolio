import React from 'react';
import Reactlogo from '../../Assets/GitHub-logo.png'
import Reactlogo1 from '../../Assets/229082.png'
export default function Contact(){
  return <div className='contact '>
            <div className='text1'>
              <h1 className='tex' id='rainbow'>Contact</h1>
              <a className='email' href="mailto:kingjordan2122@gmail.com">Email: kingjordan2122@gmail.com</a>
   <a target='_blank' href="https://github.com/JOJOKE21" className='githubIcon'>
  <img src={Reactlogo}/>
</a>
<a target='_blank' href="https://www.linkedin.com/in/JordanDGant/" className='linkedinIcon'>
  <img src={Reactlogo1}/>
</a>
   </div>
    </div>
}