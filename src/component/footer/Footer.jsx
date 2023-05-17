import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer className='footer'>
      <a href='#' className='footer-logo'>ANKITA</a>
      <ul className='permalinks'>
        <li> <a href='#' className=''>Home</a></li>
        <li> <a href='#about' className=''>About</a></li>
        {/* <li> <a href='#blog' className=''>Blog</a></li> */}
        <li> <a href='#portfolio' className=''>Portfolio</a></li>
        <li> <a href='#contact' className=''>Contact</a></li>
      </ul>
      <div className="footer-socials">
        <a href = "https://facebook.com" target="_blank"><FaFacebookF/></a>
        <a href = "https://instagram.com"  target="_blank"><FiInstagram/></a>
        <a href = "https://twitter.com"  target="_blank"><IoLogoTwitter/></a>
      </div>
      <div className="footer-copyright">
        <small>
          &copy; Ankita's Portfolio. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default footer
