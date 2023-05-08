import { useState } from "react";

function UserIcon() {
    
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
            <svg width="33" height="33" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleSvgClick} >
            <path d="M20.5902 22C20.5902 18.13 16.7402 15 12.0002 15C7.26016 15 3.41016 18.13 3.41016 22M12.0002 12C13.3262 12 14.598 11.4732 15.5357 10.5355C16.4734 9.59785 17.0002 8.32608 17.0002 7C17.0002 5.67392 16.4734 4.40215 15.5357 3.46447C14.598 2.52678 13.3262 2 12.0002 2C10.6741 2 9.4023 2.52678 8.46462 3.46447C7.52694 4.40215 7.00016 5.67392 7.00016 7C7.00016 8.32608 7.52694 9.59785 8.46462 10.5355C9.4023 11.4732 10.6741 12 12.0002 12V12Z"   stroke="var(--color-white)"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
          ) : (
            <svg id="Vector" width="33" height="33" viewBox="0 0 20 22"  fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '40px', maxHeight: '40px' }}>
            <path d="M18.5902 21C18.5902 17.13 14.7402 14 10.0002 14C5.26016 14 1.41016 17.13 1.41016 21M10.0002 11C11.3262 11 12.598 10.4732 13.5357 9.53553C14.4734 8.59785 15.0002 7.32608 15.0002 6C15.0002 4.67392 14.4734 3.40215 13.5357 2.46447C12.598 1.52678 11.3262 1 10.0002 1C8.67407 1 7.4023 1.52678 6.46462 2.46447C5.52694 3.40215 5.00016 4.67392 5.00016 6C5.00016 7.32608 5.52694 8.59785 6.46462 9.53553C7.4023 10.4732 8.67407 11 10.0002 11Z" stroke="var(--color-white)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0,0,0,55.97233963012695"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="indefinite" dur="4.5s" values="0,0,0,55.97233963012695; 
                      0,27.986169815063477,27.986169815063477,0; 
                      55.97233963012695,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
            </svg>
          )}
       </>
      );
    }
    

export default UserIcon;