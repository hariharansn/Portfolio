import React, { useState, useEffect, useRef } from 'react';
import './nav.css';
import UserIcon from './assests/UserIcon';
import HomeIcon from './assests/HomeIcon';
import EducationIcon from './assests/EducationIcon';
import WorksIcon from './assests/WorksIcon';
import ContactIcon from './assests/ContactIcon';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('home');
  const observer = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveNav(entry.target.id);
      }
    });
  };

  const handleScroll = () => {
    const isTop = window.scrollY < 100;
    if (isTop) {
      setActiveNav('home');
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.current.observe(section);
    });

    document.addEventListener('scroll', handleScroll);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="nav-container">
      <nav>
        <a href="#" className={activeNav === 'home' ? 'active' : ''} onClick={() => setActiveNav('home')}>
          <HomeIcon />
        </a>
        <a href="#about" className={activeNav === 'about' ? 'active' : ''}>
          <UserIcon />
        </a>
        <a href="#education" className={activeNav === 'education' ? 'active' : ''}>
          <EducationIcon />
        </a>
        <a href="#work" className={activeNav === 'work' ? 'active' : ''}>
          <WorksIcon />
        </a>
        <a href="#contact" className={activeNav === 'contact' ? 'active' : ''}>
          <ContactIcon />
        </a>
      </nav>
    </div>
  );
}

export default Nav;
