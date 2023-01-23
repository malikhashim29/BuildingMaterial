import React from "react";
import "./aboutSection.css";
import { Button } from "@material-ui/core";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";




const Contact = () => {
        // const [click, setClick] = useState(false);

//  const handleClick = () => setClick(!click);

const visit = () => {
    window.location = "/";
  };
  return (
 <>
 <div className="contactContainer"> 
 
  
<div class="getmarriage">
          <h2>GETTING BUILDING MATERIAL ?</h2>
            <p>
              Wanna Build your Dream Home, We Got You Provide Home Material. <span className="vtr"> TRY US </span>
            </p>
            <div className="trybtn">
                 <Button onClick={visit}  >
             TRY US!
           </Button> 
            </div>
        
           
        </div>
     </div>
     </>
  );

};

export default Contact;