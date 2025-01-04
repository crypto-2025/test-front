import React from 'react';

const ImageComponent = ({imgsrc}) => {
    return (
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', margin: '20px' }}>
            <img 
                alt="Case Study: XP’s Ticket Marketplace Could Upend the Entertainment Industry" 
                fetchPriority="high" 
                width="490" 
                height="275" 
                decoding="async" 
                data-nimg="1" 
                className="tw-w-full tw-rounded-xl lg:tw-col-span-5" 
                style={{ 
                    color: 'transparent', 
                    borderRadius: '0.75rem', 
                    maxWidth: '100%', 
                    height: 'auto' 
                }} 
                src={imgsrc}
            />
            <div style={{ 
                justifyContent: 'left',
                position: 'absolute', 
                top: '50%', 
            
                transform: 'translate(-120%, -50%)', 
                textAlign: 'left', 
                color: 'white' 
            }}>
                <h1 style={{ 
                    fontSize: '24px', 
                    fontWeight: '400' 
                }}>
                    Case Study
                </h1>
                <h1 style={{ marginTop:'-10px',
                    fontSize: '50px', 
                    fontWeight: 'bolder' 
                }}>
                    XP
                </h1>
            </div>
        </div>
    );
};

export default ImageComponent;