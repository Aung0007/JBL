


import React from 'react'
import aboutImg from '../assets/Img/about-img.png'

const About = () => {
  return (
   <>
   <section className="about section" id="about">
    <div className="about-container container grid">
        <div className="about-data">
            <h2 className="section-title">
                MORE ABOUT US
            </h2>

            <p className="about-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tempora provident necessitatibus soluta. Esse quod veritatis magni repellendus tempora facere repellat laudantium libero, pariatur atque impedit, deleniti natus vero veniam?
            </p>

            <a href="" className="button">
                Know More
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
            </a>

            <img src={aboutImg} alt="" className="about-img" />
        </div>
    </div>
   </section>
   </>
  )
}

export default About