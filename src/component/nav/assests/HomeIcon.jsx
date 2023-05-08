

import { useState ,createContext } from "react";

export const NumberContext =createContext();

function HomeIcon() {
 
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
            <svg width="33" height="33" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  onClick={handleSvgClick}  >
            <path d="M9.02 21.99V14.0001H15V21.99M9.5 2.83992L3.63 7.04004C2.73 7.74004 2 9.23003 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.5 2.71992C13.1 1.73992 10.85 1.78992 9.5 2.83992Z" stroke="var(--color-white)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            
          ) : ( 
            <svg id="Iconsax/Linear/home2" width="33" height="33" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '40px', maxHeight: '40px' }}>
<path d="M9.02 21.99V14.0001H15V21.99M9.5 2.83992L3.63 7.04004C2.73 7.74004 2 9.23003 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.5 2.71992C13.1 1.73992 10.85 1.78992 9.5 2.83992Z" stroke="var(--color-white)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0,0,0,88.97046661376953"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="indefinite" dur="4.5s" values="0,0,0,88.97046661376953; 
          0,44.485233306884766,44.485233306884766,0; 
          88.97046661376953,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
</svg>
          )}
    </>
      );
    }
    

export default HomeIcon;


