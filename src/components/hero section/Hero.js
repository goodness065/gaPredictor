import React from 'react'
import "./style/hero.css"
import heroImg from "../../asset/images/slide2.png"
import base from "../../asset/images/base.apk"

const Hero = () => {
  return (
    <>
    <section className="desktop-landing-page container">
        <div className="left-text">
          
          <h1>We know what it means to make money from what you love doing.</h1>
          <br />
          <p>
            With <b>OgaPredictor,</b>you can monetize your football predicting
            <br />
            <b>skill</b>.
          </p>
          <div className="download-btns">
            <a
            href={base}
            download
            rel="noopener noreferrer" 
          >
            Download Mobile App
          </a>
          </div>
        </div>
        <div className="right-text">
          <img src={heroImg} alt="" />
        </div>
    </section>
    <section className="mobile-landing-page container">
    <div className="right-text">
          <img src={heroImg} alt="" />
        </div>
        <div className="left-text">
          
          <h1>We know what it means to make money from what you love doing.</h1>
          <br />
          <p>
            With <b>OgaPredictor,</b>you can monetize your football predicting
            <br />
            <b>skill</b>.
          </p>
          <div className="download-btns">
            <a
            href={base}
            download
            rel="noopener noreferrer" 
          >
            Download Mobile App
          </a>
          </div>
        </div>
        
    </section>
    
    </>
  )
}

export default Hero