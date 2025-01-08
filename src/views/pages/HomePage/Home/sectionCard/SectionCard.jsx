import React, { useRef, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import CardComponent  from '../../Card/CardComponent';
import './sectionCard.css'
const SectionCard = ({  
    image,
    title,
    likesCount,
  subscrib,
    major,
    CardpersonalInfo,
    Subscribe
}) => {
    const carouselRef = useRef(null);
    console.log(CardpersonalInfo)

    const handleScrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const handleScrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    // Automatic scrolling
    useEffect(() => {
        const interval = setInterval(() => {
            handleScrollRight();
        }, 2000); // Scroll every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
            
            <button 
                onClick={handleScrollLeft} 
           className='prev-arrow'
            >
                <AiOutlineArrowLeft size={20} />
            </button>
            <div 
                ref={carouselRef}
                style={{ 
                    display: 'flex',
                    overflowX: 'hidden',
                    scrollBehavior: 'smooth',
                    padding: '20px',
                    whiteSpace: 'nowrap',
                }}
            >
                {Array.from({ length: 9 }).map((_, index) => (
                    <div  className ='CardContainer'  key={index}>
                         <CardComponent
            image={image}
            title={title}
            likesCount={likesCount}
          subscrib={subscrib}
            major={major}
            CardpersonalInfo={CardpersonalInfo}
            Subscribe={Subscribe}
          />
                    </div>
                ))}
            </div>
            <button 
                onClick={handleScrollRight} 
                className='next-arrow'
           
            >
                <AiOutlineArrowRight size={50}  />
            </button>
        </div>
    );
};

export default SectionCard;