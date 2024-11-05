import React from 'react'
import './Content.css'
import img1 from './pic2.png'

function Content() {
  return (
    <div className='section'>
       <div className="home-text">
            <span>Web Developer</span>
            <h1>Gokulakrishnan M</h1>
            <p>I'm a self-made designer and Web Developer,I specialize in Front-End development, proficient in Html,css,javascripts,React,bootstrap,SQL. Always mainly focused on creating an easier user experience through the better design and eager to learn and stay updated. Let's connect and discuss how my skills can contribute to your projects! </p>
            <div className="main-btn">
                <a href="https://www.linkedin.com/in/gokulakrishnan-m-13b000257/" className="btn">Hire Me</a>
            </div>
        </div>
        <div className="home-img">
          <img src={img1}></img>
          <div className='anima'></div>
        </div>

    </div>
  )
}

export default Content