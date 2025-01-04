import React, { useState } from 'react';
// import Header from "../../header/header.jsx";
import Header3 from "../../../../component/header/header3";
import NFTCard from '../NFTCard/NFTCard.jsx';
import Footer from "../../../../component/footer/Footer";
import MainSection from '../mainSection/mainSection.jsx';
import ProfileCard from '../secandSection/secandSection.jsx';
import NewCard from "../../../../component/CardNew/newCard";
import CardCarousel from './test1/test.jsx'
import Solution from '../Solution/Solution.jsx'
import './Home.css'; 
import Button from '../../../../component/ui/Button/button';
import SectionCard from './sectionCard/SectionCard.jsx';
import Typography from '../../../../component/ui/typography/typography';
import Section1 from '../../../../component/newItem/section1';
function HomePage() {
 
 
      return (
        <body className='home' style={{ fontFamily: "'Arial', sans-serif" }}>
            <div  >
           
          <Header3 />
    
           <Section1 />
          <NewCard img1={'assets/Images/14.jpg'}
          img2={'assets/Images/15.jpg'}
          img3={'assets/Images/16.jpg'}/>
        
          
      
         
            <NFTCard 
            imgSrc={'assets/Images/10.jpg'}
            TextFirst={'In the MAS platform, clients will be able to financially support '}
            TextFirst1={'the contenit creator in two ways:'}
            Maintext1={'Bundles'}
            Maintext2={'Generic Donations'}
            Maintext3={'NFT Auctions'}
            SubText1={'MAS setup with bundles specific prices and benefits and clients will be able to purchase those bundles'}
            SubText2={'Clients can also make generic donations to MAS, in order to support all their projects and activites'}
            SubText3={'Clients can also make generic donations to MAS, in order to support all their projects and activites'}
            newtitle={'How It Works'}
            />


          
          
          <div>
            <Solution/>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <Button withAnimation > Creator</Button>
          
          </div>
     
          <SectionCard   
          image={ 'assets/Images/17.jpg'}
            title={'Alaa'}
            likesCount={'3.3'}
          subscrib={'2'}
            major={'Front End'}/>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <Button withAnimation > Bundells</Button>
         

          </div>
          <SectionCard 
          CardpersonalInfo
          image={ 'assets/Images/18.jpg'}
          title={'PHP Course'}
          likesCount={'3.3'}
          subscrib={'2'}
          major={'Front End'}


          />


       
          
          <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <Button withAnimation > MarketPlaces</Button>


         
          </div>
          <SectionCard 
          CardpersonalInfo
          likesCount={'3.3'}
          image={'assets/Images/7.jpg'}
          title={`Mercedes car`}
          // onFollow={handleShowProductCard}
          subtitle={'( 8000 ) MAS'}
          profileImage={'assets/Images/5.jpg'}


          />

          {/* <CardCarousel/> */}
          <div className="centered-container" style={{ placeItems:'center',display: 'grid', fontSize : '60px',
   }}>
      <Typography component="headTitle" >Best Sellers </Typography>
  
    </div>
         <div  className ='SectionWrapper'style={{ display: "flex",justifyContent: "center",  flexWrap: "wrap" }}>
        
                    {Array.from({ length: 9 }).map((_, index) => (
    <ProfileCard
           titel="Georgia Ewing"
            text="@georgiaewing"
           imgsrc={'assets/Images/7.jpg'}
           imgsrc1={'assets/Images/1.jpg'}
          />
  ))}
</div>
<div>
<div className="centered-container" style={{ placeItems:'center',display: 'grid',
   }}>
    
 

      <Typography component="headTitle" >Popular categories </Typography>
          </div>
         
          <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" ,marginBottom:'20px' }}>
          <MainSection />
          </div>  
</div>

       
          <Footer />
          
        </div>
        </body>
      
      );
    }
export default HomePage;