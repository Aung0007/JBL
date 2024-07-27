

import React from 'react'
import spon1 from '../assets/Img/sponsor-1.png'
import spon2 from '../assets/Img/sponsor-2.png'
import spon3 from '../assets/Img/sponsor-3.png'
import spon4 from '../assets/Img/sponsor-4.png'



const Sponsor = () => {
  return (
    <>
    <section className="sponsor section">
        <div className="sponsor-container container grid">
            <img src={spon1} alt="" className="sponsor-img" />
            <img src={spon2} alt="" className="sponsor-img" />
            <img src={spon3} alt="" className="sponsor-img" />
            <img src={spon4} alt="" className="sponsor-img" />
        </div>
    </section>
    </>
  )
}

export default Sponsor