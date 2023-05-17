import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'


const Nav = () => {

  const [active, setActive] = useState('#')
  return (
   <nav className='navdown'>
    <a href='#' onClick={() => setActive('#')} className={active==='#'? 'active' : ''}><AiOutlineHome/></a>
    <a href='#about' onClick={() => setActive('#about')} className={active==='#about'? 'active' : ''}><AiOutlineUser/></a>
    <a href='#edu' onClick={() => setActive('#edu')} className={active==='#edu'? 'active' : ''}><BiBook/></a>
    <a href='#portfolio' onClick={() => setActive('#portfolio')} className={active==='#portfolio'? 'active' : ''}><RiServiceLine/></a>
    <a href='#contact' onClick={() => setActive('#contact')} className={active==='#contact'? 'active' : ''}><BiMessageSquareDetail/></a>
   </nav>

  
  )
}

export default Nav
