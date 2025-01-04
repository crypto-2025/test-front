import React from "react";
import './NFTCard.css'; 
import { SectionWrapper } from "../../../../hoc";
import Typography from "../../../../component/ui/typography/typography";

const NFTCard = ({ imgSrc, Maintext1, Maintext2, Maintext3, SubText1, SubText2, SubText3, TextFirst,TextFirst1, newtitle }) => {
  console.log(Maintext1)
  return (
    <div className="nft-card">
    
      <div className="nft-card-overlay"></div>

   
      <div className="nft-card-image-container">
        <img src={imgSrc} alt="NFT Graphic" className="nft-card-image" />
      </div>

     
      <div className="nft-card-content">
        <Typography component="headTitle" >{newtitle} </Typography>
        <h2 className="nft-card-subtitle">{TextFirst}</h2>
        <h2 className="nft-card-subtitle">{TextFirst1}</h2>

        <h2 className="nft-card-section-title">{Maintext1}</h2>
        <p className="nft-card-text">{SubText1}</p>

        <h2 className="nft-card-section-title">{Maintext2}</h2>
        <p className="nft-card-text">{SubText2}</p>

        <h2 className="nft-card-section-title">{Maintext3}</h2>
        <p className="nft-card-text">{SubText3}</p>
      </div>
    </div>
  );
};
export default SectionWrapper(NFTCard,"NFTCard","") 


