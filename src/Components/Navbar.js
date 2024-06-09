import React, { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdContactPhone } from "react-icons/md";import { LiaBuromobelexperte } from "react-icons/lia";

import './Navbar.css';
const Navbar = () => {
    const a= ()=>{
            var x = document.getElementById("m-nav");
            let y = document.getElementById("y")
            var Z = document.querySelectorAll("[id='Z']");
            if (x.style.display === "block") {
                for (var i = 0; i < Z.length; i++) {
                    // Do something with each element (e.g., hide it)
                    Z[i].style.display = 'flex';
                }
                x.style.display = "none";
                y.style.display = "none"
                
            } else {
                x.style.display = "block";                
                for ( i = 0; i < Z.length; i++) {
                    // Do something with each element (e.g., hide it)
                    Z[i].style.display = 'none';
                }
                y.style.display="block"
                
            }
          
    }
    const[count,setCount]= useState(0);
    const b=()=>{
        let element = document.getElementsByTagName("nav")[0];
        var a = count%2;
        console.log(a);
        var active = document.querySelectorAll("[id = mood]");
        setCount(count+1);
        if (a===0){
            element.classList.remove("light")
            active[0].classList.add("yellow")
            active[1].classList.remove("yellow")
        }else{
            element.classList.add("light")
            active[0].classList.remove("yellow")
            active[1].classList.add("yellow")
        }
    }
    

  return (
    <>  
        <div className='m-nav' id='m-nav'>
                <div>
                    <ul>
                        <li><FaHome /> <a href='#home'>HOME</a>  </li>
                        <li><FcAbout /> <a href='#about'>ABOUT</a> </li>
                        <li><AiOutlineFundProjectionScreen /> PROJECTS </li>
                        <li><LiaBuromobelexperte /> EXPRRINCE </li>
                        <li><MdContactPhone /> <a href='#contact'>CONTACT</a> </li>
                    </ul>
                </div> 
         </div>
          <nav className='light'>
              <div className='logo-container'>
                  <div className='Logo'>

                  </div>
                  <h1> VIKAS</h1>
              </div>
              <div>
                  <div className='x' onClick={a} >
                      <h1 id= "y">X</h1>
                      <div id='Z'></div>
                      <div id='Z'></div>
                      <div id='Z'></div>
                  </div>
                  <div className='pc navigation'>
                      <ul>
                          <li><FaHome /> <a href='#home'>HOME</a> </li>
                          <li><FcAbout /> <a href='#about'>ABOUT</a>  </li>
                          <li><AiOutlineFundProjectionScreen /> PROJECTS </li>
                          <li><LiaBuromobelexperte /> EXPRRINCE </li>
                          <li> <MdContactPhone /> <a href='#contact'>CONTACT</a> </li>
                      </ul>
                      <div className='Mood' onClick={b} >
                              <div  id='mood' > <MdDarkMode /> </div>
                                  <div id='mood' className='yellow'><MdLightMode /></div>

                      </div>
                  </div>
              </div>
          </nav>
          
    </>
  )
}

export default Navbar
