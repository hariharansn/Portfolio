import React from 'react'
import'./footer.css'


import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/github';
import  instagram from 'react-useanimations/lib/instagram'
import linkedin from 'react-useanimations/lib/linkedin'
const Footer = () => {

  const githubLink = "https://github.com/hariharansn";

  const instagramLink = "https://www.instagram.com/yaathrigan/";

  const linkedinLink = "https://www.linkedin.com/in/hariharan-saravanan/";
 
  return (
   <footer>
    <a href="#" className='footer__logo'>Hariharan</a>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#work">Project & Freelance</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>


<div className='footer__socials'>
<UseAnimations animation={github}  size={40}  className="pointer-cursor" onClick={() => window.location.href = githubLink} />
<UseAnimations animation={linkedin}  size={40}  className="pointer-cursor" onClick={() => window.location.href = linkedinLink} />
<UseAnimations animation={instagram}  size={40}  strokeColor='000' className="pointer-cursor" onClick={() => window.location.href = instagramLink} />
     

</div>

<div className='footer__copyright'>
  <small>&copy; Hariharan. All rights reserved</small>

</div>
    
     </footer>
  )
}

export default Footer