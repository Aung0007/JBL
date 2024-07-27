

import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../jav'

const Nav = () => {
  const home = () =>{
    const elem1 = document.querySelector("#home")
    window.scrollTo({
      top:elem1?.getBoundingClientRect().top,
      left:0,
      behavior:"smooth"
    })
  };

  const about = () =>{
    const elem2 = document.querySelector(".about")
    window.scrollTo({
      top:elem2?.getBoundingClientRect().top,
      left:0,
      behavior:"smooth"
    })
  };

  const fav = () =>{
    const elem3 = document.querySelector("#favorite");
    window.scrollTo({
      top:elem3?.getBoundingClientRect().top,
      left:0,
      behavior:"smooth"
    })
  };

  const model = () =>{
    const elem4 = document.getElementById("#model");
    window.scrollTo({
      top:elem4?.getBoundingClientRect().top,
      left:0,
      behavior:"smooth"
    })
  }

  useEffect(()=>{
    

  // show menu
  const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

//Menu show
if(navToggle){
navToggle.addEventListener('click', ()=>{
navMenu.classList.add('show-menu')
});
}

//Menu hidden
if(navClose){
navClose.addEventListener('click', ()=>{
navMenu.classList.remove('show-menu')
})
}

//remove menu mobile
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

  })

  return (
    <>
    <header className="header" id="header">
      <nav className="nav container">
        <a href="" className="nav-logo">JBL</a>

        <div className="nav-menu" id="nav-menu">
          <ul className="nav-list">

            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={home}>Home</a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={about}>About</a>
            </li>

            <li className="nav-item">
              <a href="#favorite" className="nav-link" onClick={fav}>Favorites</a>
            </li>

            <li className="nav-item">
              <a href="#model" className="nav-link" onClick={model}>Models</a>
            </li>
          </ul>

          {/* close button */}
          <div className="nav-close" id="nav-close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </div>
        </div>

        {/* Toggle button */}
        <div className="nav-toggle" id="nav-toggle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Nav