import React, { useRef } from 'react';
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from "emailjs-com"





const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ng5gzj4', 'template_e0o4zna', form.current, 'K9RJOOBUdWjYTSTV7')
      .then(
        (response) => {
          window.alert("Email sent.")
        },
        (error) => {
          console.log('FAILED...', error.text);
          window.alert("Something went wrong!")
        },
      );
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
           <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ashen.semithu@gmail.com</h5>
            <a href="mailto:ashen.semithu@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
           <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Ashen Tennakoon</h5>
            <a href="https://m.me/100008617088548" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
           <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+94761827545</h5>
            <a href="https://api.whatsapp.com/send?phone=+94761827545" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact