import React from 'react';
import './Solution.css'; 
import { SectionWrapper } from "../../../../hoc";

const Solution = () => {
  return (
    <div className="container1">
      <div className="content1">
        <h1 className="title1" style={{ 
      
         }}>Our Solutions</h1>
        
          <p className="description1" style={{ 

          }}>
            The MAS platform takes the traditional institutions of patronage donations to the next l
            evel. In it, individuals that wish to support certain content creators (called clients) can connect with those content creators (called MAS) and financially contribute with specific projects or make generic donations to specific creators. Unlike generic crowdfunding platforms, the MAS platform will enable a faster close and personal relationship.
          </p>
       
      </div>
      <div className="image-containerin1">
        <img src="assets/Images/15.jpg" alt="MAS Platform" className="image" />
      </div>
    </div>
  );
};


export default SectionWrapper(Solution,"Solution","") 