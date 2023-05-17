// import React from 'react'
// import './about.scss'
// const About = () => {
//   return (
//     <div>
//      <section id='about'>About</section> 
//     </div>
//   )
// }

// export default About


import { useEffect, useState } from 'react'
import Progressbar from './../progressbar/Progressbar'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import './about.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div  id='about' className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="aboutMe">
            <div className="ahv">

            <p >
            I'm a very ambitious front-end developer looking for a role in an
             IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
           
          </div>
          <div className="skills">
          <Progressbar progress ="80" skill ="React" /> 
          <Progressbar progress ="70" skill ="Next JS" />
          <Progressbar progress ="50" skill ="Angular" />  
          <Progressbar progress ="80" skill ="JavaScript" />
          <Progressbar progress ="70" skill ="TypeScript" />
          <Progressbar progress ="60" skill ="CSS" />     
          <Progressbar progress ="60" skill ="Tailwind CSS" />        
          <Progressbar progress ="50" skill ="MaterialUI" />
          <Progressbar progress ="60" skill ="Java" />
          </div>
            </div>
         
        </div>

      
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
