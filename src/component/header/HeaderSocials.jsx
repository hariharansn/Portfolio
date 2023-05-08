import React from 'react'

import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/github';

import linkedin from 'react-useanimations/lib/linkedin'
import CodeSandBox from './CodeSandBox';


const HeaderSocials = () => {
  const githubLink = "https://github.com/hariharansn";

  const linkedinLink = "https://www.linkedin.com/in/hariharan-saravanan/";
 
  return (
    <div className='header__socials'>
        <div>
      <UseAnimations animation={github} size={33} strokeColor= 'var(--first-color)' className="pointer-cursor" onClick={() => window.location.href = githubLink} />
      
      <br />
      <UseAnimations animation={linkedin} size={33} strokeColor='var(--first-color)' className="pointer-cursor" onClick={() => window.location.href = linkedinLink} />
      <br/>
      <CodeSandBox />
   
    </div>
    </div>
  )
}

export default HeaderSocials