

import { useState } from "react";

function EducationIcon() {
    
      const [showSvgOne, setShowSvgOne] = useState(true);
    
      const handleSvgClick = () => {

        setShowSvgOne(!showSvgOne);
        setTimeout(() => {
          setShowSvgOne(true);
        }, 5000);
      };
    
      return (
        < >
          {showSvgOne ? (
            <svg width="33" height="33" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleSvgClick}>
            <path d="M10.05 2.53004L4.03002 6.46004C2.10002 7.72004 2.10002 10.54 4.03002 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73004 19.98 6.47004L13.99 2.54004C12.91 1.82004 11.13 1.82004 10.05 2.53004V2.53004Z" stroke="var(--color-white)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.63012 13.08L5.62012 17.77C5.62012 19.04 6.60012 20.4 7.80012 20.8L10.9901 21.86C11.5401 22.04 12.4501 22.04 13.0101 21.86L16.2001 20.8C17.4001 20.4 18.3801 19.04 18.3801 17.77V13.13M21.4001 15V9" stroke="var(--color-white)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            
          ) : (
            <svg id="Iconsax/Linear/teacher" width="33" height="33" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '40px', maxHeight: '40px' }}>
            <path d="M10.05 2.53004L4.03002 6.46004C2.10002 7.72004 2.10002 10.54 4.03002 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73004 19.98 6.47004L13.99 2.54004C12.91 1.82004 11.13 1.82004 10.05 2.53004V2.53004Z" stroke="var(--color-white)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0,0,0,49.635215759277344"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="indefinite" dur="4.5s" values="0,0,0,49.635215759277344; 
                      0,24.817607879638672,24.817607879638672,0; 
                      49.635215759277344,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
            <path d="M5.63012 13.08L5.62012 17.77C5.62012 19.04 6.60012 20.4 7.80012 20.8L10.9901 21.86C11.5401 22.04 12.4501 22.04 13.0101 21.86L16.2001 20.8C17.4001 20.4 18.3801 19.04 18.3801 17.77V13.13M21.4001 15V9" stroke="var(--color-white)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0,0,0,32.0128059387207"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="indefinite" dur="4.5s" values="0,0,0,32.0128059387207; 
                      0,16.00640296936035,16.00640296936035,0; 
                      32.0128059387207,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
            </svg>
          )}
        </>
      );
    }
    

export default EducationIcon;