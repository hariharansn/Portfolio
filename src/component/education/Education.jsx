import React, { useState } from 'react';
import './education.css';


import Java from './assests/Svg/Java';
import Aws from './assests/Svg/Aws';
import Cloud from './assests/Svg/Cloud';
import BlenderLogo from './assests/logo/BlenderLogo';
import ReactLogo from './assests/logo/ReactLogo';
import JavaLogo from './assests/logo/JavaLogo';

import FigmaLogo from './assests/logo/FigmaLogo';




const tabData = [
  {
    tabName: "Academic's",
    cards: [
      { id: 1, title: 'Higher Sec Education', description: 'Computer Science', progress: 71 },
      { id: 2, title: 'Bachelor of Engineering', description: 'Computer Science', progress: 76 },
      { id: 3, title: 'Secondary Education', description: 'General Studies', progress: 79 },
    ],
  },
  {
    tabName: "Course's",
    cards: [
      { id: 1, title: 'Java Full-stack', description: <><p>Development</p><Java /></> },
      { id: 2, title: 'Amazon Web Service', description: <><p>Machince Learning</p><Aws /></> },
      { id: 3, title: 'Google Cloud ', description: <><p>Computing</p><Cloud /></> },
    ],
  },

  {
    tabName: "Skill's",
    cards: [
      { id: 1, title: 'Blender', description: <><p>3d modelling</p><BlenderLogo /></> },
      { id: 2, title: 'React', description: <><p>Front-end Development</p><ReactLogo /></> },
      { id: 3, title: 'Java ', description: <><p>Business Logic's</p><JavaLogo /></> },
     { id: 4, title: 'Figma ', description: <><p>Design & Prototyping</p><FigmaLogo /></> },
       ],
  },



];

function Education() {
  const [activeTab, setActiveTab] = useState("Academic's");

  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleMouseOut = (event) => {
    const circle = event.target;
    const progress = circle.getAttribute('data-progress');
    circle.style.strokeDasharray = `${progress} 100`;
    circle.style.strokeDashoffset = `calc(100 - ${progress})`;


  };

  const handleHover = (event) => {
    const circle = event.target;
    circle.style.strokeDasharray = `0 100`;
    circle.style.strokeDashoffset = `0`;
  };

  


  return (
    <section id='education'>
      <h5>Path Way</h5>
      <h2>My Education</h2>
      <div className='tab-container'>
        {tabData.map((tab) => (
          <div
            key={tab.tabName}
            className={`tab ${activeTab === tab.tabName ? 'active' : ''}`}
            onClick={() => handleClick(tab.tabName)}
          >
            {tab.tabName}
          </div>
        ))}
      </div>
      <div >
        
          <div className='tab-content-container'>
            
            
             {
            tabData
              .find((tab) => tab.tabName === activeTab)
              .cards.map((card) => (
                <div key={card.id} className='tab-content'>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div>
                    {card.progress && (
                      <svg viewBox='0 0 36 36'>
                        <circle
                          className='progress-ring__circle'
                          cx='22'
                          cy='18'
                          r='10'
                          data-progress={card.progress}
                          onMouseOver={handleHover}
                          onMouseOut={handleMouseOut}
                        />
                        <text
                          className='progress-ring__text'
                          x='50%'
                          y='50%'
                          dy='-.5em'
                          textAnchor='middle'
                        >
                          {card.progress}%
                        </text>
                      </svg>
                    )}
                  </div>
                </div>
              ))}

              
          </div>
      
      </div>
      <p className="text-center">
      We will benefit from the abilities we learn. We may learn it from academics and within ourselves.<br/>That has made our lives so far perfect.</p>
    </section>
  );
}

export default Education;
