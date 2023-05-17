import React from 'react'
import './portfolio.css'
import IMG from './../../assets/ecom.jpg'
import note from './../../assets/note.jpg'
import shop from "./../../assets/cart.jpg"


const data = [
 { id:1,
  image: note,
  title: 'Note taking App',
  github: 'https://github.com/09SinghAnkita/inoteBook_Frontend',
  demo: 'https://inotebook-frontend-vqww.onrender.com/'
},

{ id:2,
  image: shop,
  title: 'Shopping Cart',
  github: 'https://github.com/09SinghAnkita/ShoppingCart',
  demo: 'https://shopping-cart-pozu.onrender.com/'
},
{ id:3,
  image: IMG,
  title: 'E-Commerce Site',
  github: 'https://github.com',
  demo: 'https://dribble.com'
},
]

const Portfolio = () => {
  return (
   <section id='portfolio'>
    <h5> My Recent Work</h5>
    <h2>Portfolio</h2>
  <div className='container portfolio-container'>
  {data.map(({id,image,title, github, demo}) =>{
   return(
  <article key={id} className='portfolio-item'>
    <div className='portfolio-item-image'>
      <img src={image} alt=""  /> 
    </div>
    <h3>{title}</h3>
    <div className='portfolio-item-cta'>
    <a href={github} target='_blank' className='btn'>Github</a>
    <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
    </div>
  </article>

)})}
   
    </div>
     </section>

  )
}

export default Portfolio
