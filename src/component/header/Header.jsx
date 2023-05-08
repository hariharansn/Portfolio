import React from 'react'
import './header.css'
import CTA from './CTA'
import ModelViewer from '../3d-model/ModelViewer'
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  
  return (
<header>
  <div className="container header__container">
    <h5> Hello, I'm</h5>
    <h1>Hariharan</h1>
    <h5 className='text-color-light'>Fresher</h5>
    
    <CTA/>
    <HeaderSocials/>
    
<div className='header__model__container'>
<div className='header__model'><ModelViewer/></div>
    </div>
   

<a href='#contact' className='scroll__down'>Scroll Down</a>
  </div>
</header>
  )
}

export default Header