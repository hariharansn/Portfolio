import React from 'react'

import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Education from './component/education/Education'
import Work from './component/work/Work'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'



const App = () => {
  return (
     <>
   <Header/>
   <About/>
<Education/>

<Work/>
<Contact/>

<Footer/>
   <Nav/>
    </ >
  )
}

export default App