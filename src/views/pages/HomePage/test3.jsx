import React, { useRef, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import CardComponent  from './Card/CardComponent2';

const CardCarousel = () => {
    const carouselRef = useRef(null);

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
                style={{ 
                    cursor: 'pointer', 
                    marginRight: '7px', 
                    color: '#160b4d', 
                    background: 'rgba(255, 255, 255, 0.5)', 
                    border: 'none', 
                    borderRadius: '50%', 
                    width: '60px', 
                    height: '60px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                }}
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
                    <div style={{ 
                      
                       
                     }}>
                         <div style={{ 
                        margin: '0 10px', display: 'inline-block' }} key={index}>
                         <CardComponent
            image={ 'assets/Images/18.jpg'}
            title={'PHP Course'}
            likesCount={'3.3'}
            subscrib={'2'}
            major={'Front End'}
          />
                    </div>
                    </div>
                   
                ))}
            </div>
            <button 
                onClick={handleScrollRight} 
                style={{ 
                    cursor: 'pointer', 
                    marginLeft: '7px', 
                
                    color: '#160b4d', 
                    background: 'rgba(255, 255, 255, 0.5)', 
                    border: 'none', 
                    borderRadius: '50%', 
                    width: '60px', 
                    height: '60px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                }}
            >
                <AiOutlineArrowRight size={50}  />
            </button>
        </div>
    );
};

export default CardCarousel;