import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ImageSlider.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from './assets/images/Image1.jpg';
import slide_image_2 from './assets/images/Image2.jpg';

import slide_image_3 from './assets/images/Image3.jpg';
import slide_image_4 from './assets/images/Image4.jpg';

import slide_image_5 from './assets/images/Image5.jpg';
import slide_image_6 from './assets/images/Image6.jpg';

import slide_image_7 from './assets/images/Image7.jpg';
import slide_image_8 from './assets/images/Image8.jpg';
function ImageSlider() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);

  const slides = [
    {
      id: 1,
      img: slide_image_1,
      caption: ' Malware Detection System',
      preview_caption: 'Android application is malware infected or not without installation',
      link:'https://github.com/hariharansn/Androidmalware.git',
    },
    {
      id: 2,
      img: slide_image_2,
      caption: 'Online Shopping Portal',
      preview_caption: 'Virtual Experience’s where the shops are in organized structure',
      link:'https://smallpdf.com/file#s=82acc98a-0a07-4cc9-b288-3ff589ccc0ab'
    
    },

    {
      id: 3,
      img: slide_image_3,
      caption: '3d Character Viewer',
      preview_caption: '3D animated characters perform actions.',
 link:"https://codesandbox.io/s/human-react-animate-r7s5f1",     
    },
    {
      id: 4,
      img: slide_image_4,
      caption: 'Railway Reservation System',
      preview_caption: 'To manage the details of Booking, Timetable, Fare, Stations,Trains.',
     },
{
     id: 5,
      img: slide_image_5,
      caption: 'Vornea',
      preview_caption: 'Playing a VR game immerses you in a new environment.',
      link:'https://www.figma.com/proto/mMQEhvU0gi4Tj2T89TF9Gr/VORNEA?type=design&node-id=267-484&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=270%3A1397&show-proto-sidebar=1',
    
    },
     {
      id: 6,
       img: slide_image_6,
       caption: 'Akshaya Patra',
       preview_caption: 'Contribute our money until,Unlimited food for education.',
       link:'https://www.figma.com/proto/MX2zGcqyLKGuivW2POzlgl/Akshaya-Patra?type=design&node-id=125-283&scaling=contain&page-id=0%3A1&starting-point-node-id=5%3A1145',
 
      },

      {
        id: 7,
         img: slide_image_7,
         caption: 'Sports Splatter',
         preview_caption: 'Sports make and keep people healthy and long-lived.',
         link:'https://www.instagram.com/stories/highlights/17924097371215823/',
   
        },

        {
          id: 8,
           img: slide_image_8,
           caption: 'Product Poster',
           preview_caption: 'produced a poster for the product of the client',
        
          },
  ];

  const handleMoreClick = (slide) => {
    setSelectedSlide(slide);
    setShowDetails(true);
  };

  const handleDetailsClose = () => {
    setSelectedSlide(null);
    setShowDetails(false);
  };

  return (
    <div className="Image-container">
      <h5>Projects</h5>
      <h2>& Freelance</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3} // Set slidesPerView to 3
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} ${
              index === this.activeIndex ? 'swiper-pagination-bullet-active' : ''
            }"></span>`;
          },
        }} // Add pagination here
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <a href="#work" onClick={() => handleMoreClick(slide)}>
              <img src={slide.img} alt="slide_image" />
              <div className="caption">{slide.caption}</div>
            </a>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
      {showDetails && <Details slide={selectedSlide} onClose={handleDetailsClose} />}
    </div>
  );
}

function Details({ slide, onClose }) {
  return (
    <div className="details">
      <div className="details-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <a href={slide.link} target="_blank" rel="noopener noreferrer">
          <img src={slide.img} alt="slide_image" />
          <h3>{slide.caption}</h3>
        </a>
        <h5>{slide.preview_caption}</h5>
      </div>
    </div>
  );
}



export default ImageSlider;
