import React from 'react'
import "./footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ashen</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a> </li>
        <li><a href="#about">About</a> </li>
        <li><a href="#experience">Experience</a> </li>
        <li><a href="#services">Tools</a> </li>
        <li><a href="#portfolio">Portfolio</a> </li>
        <li><a href="#contact">Contact</a> </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100008617088548"><FaFacebookF/></a>
        <a href="https://www.instagram.com/s_h_y_b_o_y_/"><FiInstagram/></a>
        
      </div>
      <div className="footer__copyright">
        <small>&copy; Ashen Tennakoon.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer