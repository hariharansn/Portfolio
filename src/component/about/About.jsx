import React, {useState} from 'react'
import './about.css'
import ModelViewer from '../3d-model/ModelViewer'
import Freelancer from './assests/Freelancer'
import Project from './assests/Project';
import Certificate from './assests/Certificate';


function About() {

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  return (
    
    <section id='about'>
      <h5>Get To Know</h5>
      <h2 > About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>   

<div className='about__model__container'>
<div  className='about__model'><ModelViewer/></div>  
  </div>
  </div>
     
  
      <div className='about__content'>
        <div className='about__cards' >
          <article className='about__card'onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}>
          <Certificate showSvgOne={!isHovered1} isHovered={isHovered1} />
<h5>Certification</h5>
<small>5+ <br/> Gained</small>

          </article>
          


         
          <article className='about__card'    onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}>
            <Project showSvgOne={!isHovered2} isHovered={isHovered2} />
<h5>Project</h5>
<small>4+ <br/> Completed</small>
          </article>

          <article className='about__card' onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}>
                 <Freelancer showSvgOne={!isHovered3} isHovered={isHovered3} />
<h5>Freelance</h5>
<small>8+ <br/> Done</small>
          </article>
          </div>


<p>
There are blocked stones everywhere around me in my life, <br/> but I have broken each one to utilise it as a stepping stone and advanced.
</p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
    
  )
}

export default About