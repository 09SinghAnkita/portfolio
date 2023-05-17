import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {SiSkypeforbusiness} from 'react-icons/si'




const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6lcj3jb', 'template_w4gpema', form.current, '2QiHDSKxv9lC_SSWp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
    <div>
      <section id='contact'>
        
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className='container contact-container'>
          <div className='contact-options'>
            <article className='contact-option'>
              <MdOutlineEmail className='contact-option-icon'/>
              <h4>Email</h4>
              <h5>asingh@cy.iitr.ac.in</h5>
              <a href='mailto:asingh@cy.iitr.ac.in' target='_blank'>Send a message</a>
            </article>
               
            <article className='contact-option'>
              <SiSkypeforbusiness className='contact-option-icon'/>
              <h4>Skype</h4>
              <h5>live:c7b970f7de3d86b0</h5>
              <a href='https://join.skype.com/invite/jK2Xyvd9LKVl' target='_blank'>Send a message</a>
            </article>

            <article className='contact-option'>
              <BsWhatsapp className='contact-option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+919582613158</h5>
              <a href='https://api.whatsapp.com/send?phone=09582613158' target='_blank'>Send a message</a>
            </article>
          </div>

          <form ref={form}  onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Full Name' required/>
            <input type="email" name='email' placeholder='Email' required/>
            <textarea name='message' rows='7' placeholder='Message' required></textarea>
            <button type='submit'className=" btn btn-primary">Send Message</button>

          </form>
        </div>
        </section> 
    </div>
  )
}

export default Contact
