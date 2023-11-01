import React from 'react'
import { SiCodechef } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import "./index.css"

function FooterPage() {
    
  return (
    <div className='bgf-container'>
        <div className='footer-heading'>
           <SiCodechef className='icon-chef'/>
            <h1 className='heading-uni'>UNI Restro Cafe</h1> 
        </div>
        <p className='para'>Anything,Anytime,Anywhere.We deliver it all.</p>
        <div className='icons-container'>
          <BsLinkedin className='icon'/>
          <FaInstagram className='icon'/>
          <FaFacebookF className='icon' />
          <FaTwitter className='icon'/>
        </div>
    </div>
  )
}

export default FooterPage