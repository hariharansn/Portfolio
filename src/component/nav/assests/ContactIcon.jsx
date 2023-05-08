import { useState } from "react";

function ContactIcon() {
    
      const [showSvgOne, setShowSvgOne] = useState(true);
    
      const handleSvgClick = () => {

        setShowSvgOne(!showSvgOne);
        setTimeout(() => {
          setShowSvgOne(true);
        }, 5000);
      };
      return (
        <>
          {showSvgOne ? (
            <svg width="33" height="33" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleSvgClick}>
            <path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z" stroke="var(--color-white)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 9.5H17M7 14.5H14" stroke="var(--color-white)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            
            
          ) : (
            <svg id="Iconsax/Linear/messagetext" width="33" height="33" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '40px', maxHeight: '40px' }}>
<path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z" stroke="var(--color-white)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0,0,0,72.78810119628906"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount='indefinite' dur="4.5s" values="0,0,0,72.78810119628906; 
          0,36.39405059814453,36.39405059814453,0; 
          72.78810119628906,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
<path d="M7 9.5H17M7 14.5H14" stroke="var(--color-white)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0,0,0,17"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount='indefinite' dur="4.5s" values="0,0,0,17; 
          0,8.5,8.5,0; 
          17,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
</svg>
          )}
        </>
      );
    }
    

export default ContactIcon;