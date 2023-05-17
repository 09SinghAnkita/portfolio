import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from './../../assets/picturer.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header>
    <div className="container header-container">
    <h5>Hello I'm</h5>
    <h1>Ankita Singh</h1>
    <h5 className="text-light">Frontend Developer</h5>
    <CTA/>
    <a href='#contact' className='scroll-down'>Scroll Down</a>
    {/* <HeaderSocials/> */}
    <div className="me">
   
    <img src={ME} alt="me"  />
    
     
    
    </div>
    </div>

   </header>
  )
}

export default Header
