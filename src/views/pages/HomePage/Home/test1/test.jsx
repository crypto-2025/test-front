import React, { useRef, useEffect,useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Card2 from '../../Card/Card2';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './test1.css'

const CardCarousel = () => {
    const [showProductCard, setShowProductCard] = useState(false);

    const handleShowProductCard = () => {
      setShowProductCard(true);
    };
  
    const handleCloseProductCard = () => {
      setShowProductCard(false);
    };
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
            className='prev-arrow'
                onClick={handleScrollLeft} 
             
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
                    <div style={{ margin: '0 10px', display: 'inline-block' }} key={index}>
                        <Card2 
                            likesCount={'3.3'}
                            image={'assets/Images/7.jpg'}
                            title={`Mercedes car${index + 1}`}
                            onFollow={handleShowProductCard}
                            subtitle={'( 8000 ) MAS'}
                            profileImage={'assets/Images/5.jpg'}
                        />
                    </div>
                ))}
            </div>
            {/* <button 
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
            </button> */}
        </div>
    );
};

export default CardCarousel 