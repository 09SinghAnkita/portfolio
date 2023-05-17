import React, {useState} from 'react'
import './sidebar.scss'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import  HeaderSocials from './../header/HeaderSocials'
import {BsLinkedin } from 'react-icons/bs'
import {FaGithub } from 'react-icons/fa'


const Sidebar = () => {

  const [active, setActive] = useState('#')
  return (
    <div className='sidebar'>

   <nav  className='sidenav'>
  
    <a href='#' onClick={() => setActive('#')} className={active==='#'? 'active' : ''}><AiOutlineHome/> </a>
    <a href='#about' onClick={() => setActive('#about')} className={active==='#about'? 'active' : ''}><AiOutlineUser/></a>
    <a href='#edu' onClick={() => setActive('#edu')} className={active==='#edu'? 'active' : ''}><BiBook/></a>
    <a href='#portfolio' onClick={() => setActive('#portfolio')} className={active==='#portfolio'? 'active' : ''}><RiServiceLine/></a>
    <a href='#contact' onClick={() => setActive('#contact')} className={active==='#contact'? 'active' : ''}><BiMessageSquareDetail/></a>
   </nav>
   <div className='side-socials'>
   <a href='https://www.linkedin.com/in/ankita-singh-09' target='_blank'><BsLinkedin/></a>
   <a href='https://github.com/09SinghAnkita' target='_blank'><FaGithub/></a>
 
 
</div>
  
   </div>
  )
}

export default Sidebar
