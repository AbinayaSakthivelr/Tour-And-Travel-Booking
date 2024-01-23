
import { Button } from "bootstrap";
import React from "react";
 
function PackagesData(props) {
 
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="/" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <div className="package">
      
      </div>
      </div>
      
   
    
  );
}

export default PackagesData;