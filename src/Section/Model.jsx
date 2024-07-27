

import React from 'react'
import modelImg from '../assets/Img/model-img.png'
import toolSvg from '../assets/Img/tooltip-right.svg'

const Model = () => {
  return (
    <>
    <section className="model section" id="model">
        <h2 className="section-title">
            MODEL SPECIFICATIONS
        </h2>

        <div className="model-container container grid">
            <div className="model-content">
                <img src={modelImg} alt="" className="model-img" />

                <div className="model-tooltip model-tooltip-1">
                    <img src={toolSvg} alt="" className="model-tooltip-img" />
                    <span className="model-tooltip-text">Best Comfort</span>
                </div>

                <div className="model-tooltip model-tooltip-2">
                    <img src={toolSvg} alt="" className="model-tooltip-img" />
                    <span className="model-tooltip-text">Easy Adjustment</span>
                </div>

                <div className="model-tooltip model-tooltip-3">
                    <img src={toolSvg} alt="" className="model-tooltip-img" />
                    <span className="model-tooltip-text">Fast Charge</span>
                </div>

                <div className="model-tooltip model-tooltip-4">
                    <img src={toolSvg} alt="" className="model-tooltip-img" />
                    <span className="model-tooltip-text">Custom Audio</span>
                </div>
            </div>

            <a href="" className="model-button button">Buy Now 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>

            </a>
        </div>
    </section>
    </>
  )
}

export default Model