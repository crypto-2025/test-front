import React from 'react';
import './Solution.css'; 
import { SectionWrapper } from "../../../../hoc";
import Typography from '../../../../component/ui/typography/typography';

const Solution = () => {
  return (
    <div className="Solution_container">
      <div className="text-content">
        <Typography component='headTitle'>Our Solutions</Typography>
     
        
          <p className="description1" style={{ 

          }}>
            The MAS platform takes the traditional institutions of patronage donations to the next l
            evel. In it, individuals that wish to support certain content creators (called clients) can connect with those content creators (called MAS) and financially contribute with specific projects or make generic donations to specific creators. Unlike generic crowdfunding platforms, the MAS platform will enable a faster close and personal relationship.
          </p>
       
      </div>
      <div className="image-container">
   
      </div>
    </div>
  );
};


export default SectionWrapper(Solution,"Solution","") 