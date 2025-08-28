import React from 'react'
import image from '../assets/images.png';
const About = () => {
  return (
    <>
      <div className='about-bg-container'>
        <div className="row">
          <div className='col-12'>
            <img src={image} alt="" />
            <div className='about-link'>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
          <div className="col-12">
            <h1>I am Professional User Experience Designer</h1>
            <p>
              I design and develop services for customers specializing creating stylish,
              modern websites, web services and online stores. My passion is to design
              digital user experiences.
            </p>
            <p>
              I design and develop services for customers specializing creating stylish,
              modern websites, web services.
            </p>
            <button className='about-project-btn'>My Project</button>
            <button className='about-cv-btn'>Download CV</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default About