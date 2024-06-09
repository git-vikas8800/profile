import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
  return (
    <div className='Footer' >
      <div>
        <div className='flex'>
          <div>
          <h1>SOCIAL</h1>
          <ul>
            <li><FaLinkedinIn /></li>
            <li><FaLinkedinIn /></li>
            <li><FaLinkedinIn /></li>
            <li><FaLinkedinIn /></li>
            <li><FaLinkedinIn /></li>
          </ul>
          </div>
          <div>
            <h1>Call US</h1>
            <p>+91 99999 99999</p>
          </div>
          <div>
            <h1>Mail us</h1>
            <p>xyz@gmail.com</p>
          </div>
        </div>
        <div>
        <h2>VIKAS </h2>
          <p>A Frontend focused Web Developer bulding the Frontend of Websites and Web Applications that leads to the sucess of the overall product</p>
        </div>
      </div>
      <div className='made'>
        <p> &#169; Copywright 2024. Made By<span> VIKAS</span> </p>
      </div>
    </div>
  )
}

export default Footer
