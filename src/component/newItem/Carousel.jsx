import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css'; // تأكد من إضافة التنسيق الخاص بك هنا

const Carousel = () => {
    const items = [
        {
            img: 'assets/Images/13.jpg',
            author: 'LUNDEV',
            title: 'DESIGN SLIDER',
            topic: 'ANIMAL',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?',
        },
        {
            img: 'assets/Images/9.jpg',
            author: 'LUNDEV',
            title: 'DESIGN SLIDER',
            topic: 'ANIMAL',
                      // ... (استمر من الكود السابق)
                      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?',
                    },
                    {
                        img: 'assets/Images/3.jpg',
                        author: 'LUNDEV',
                        title: 'DESIGN SLIDER',
                        topic: 'ANIMAL',
                                  // ... (استمر من الكود السابق)
                                  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?',
                                },
                                {
                                    img: 'assets/Images/4.jpg',
                                    author: 'LUNDEV',
                                    title: 'DESIGN SLIDER',
                                    topic: 'ANIMAL',
                                              // ... (استمر من الكود السابق)
                                              description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,  tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?',
                                            },
                    // أضف المزيد من العناصر حسب الحاجة
                ];
            
                const [currentIndex, setCurrentIndex] = useState(0);
                const timeRunning = 3000;
                const timeAutoNext = 7000;
                const carouselRef = useRef(null);
            
                useEffect(() => {
                    const interval = setInterval(() => {
                        nextSlide();
                    }, timeAutoNext);
            
                    return () => clearInterval(interval);
                }, [currentIndex]);
            
                const nextSlide = () => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
                };
            
                const prevSlide = () => {
                    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
                };
            
                return (
                    <div className="carousel">
                        <div className="list">
                            {items.map((item, index) => (
                                <div className="item" key={index}>
                                    <img src={item.img} alt={item.title} />
                                    <div className="content">
                                        <div className="author">{item.author}</div>
                                        <div className="title">{item.title}</div>
                                      
                                        <div className="des"style={{ 
                                            marginTop:'150px'
                                         }}>{item.description}</div>
                                        <div className="buttons" style={{ 
                                            marginTop:'250px'
                                         }}>
                                            <button>SUBSCRIBE</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="thumbnail">
                            {items.map((item, index) => (
                                <div className="item" key={index}>
                                    <img src={item.img} alt={item.title} />
                                    <div className="content">
                                       
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="arrows">
                            <button id="prev"onClick={prevSlide} style={{ 
                               
                             }}>&lt;</button>
                            <button id="next" onClick={nextSlide}>&gt;</button>
                        </div>
                        <div className="time"></div>
                    </div>
                );
            };
            
            export default Carousel;
            
