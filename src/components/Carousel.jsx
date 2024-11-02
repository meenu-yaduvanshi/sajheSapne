import React, { useState, useEffect } from 'react';
import "../styles/carousel.css"
// import DonateNow from './DonateButton.jsx'; // Import the CSS file
import { Link } from 'react-router-dom'


const CarouselComponent = () => {
    const images = [
        'homeCarousel/carousel-1.jpeg',
        'homeCarousel/carousel-2.jpg',
        'homeCarousel/carousel-3.jpg',
        'homeCarousel/carousel-4.jpeg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (

        <>


            

            <div id='donatenow-div'>
            <Link to={'/donateButton'}>
                <button className="donate-button-home">
                    Donate Now
                </button>
            </Link>
            </div>




            <div className="img-carousel-container">
                <div className="carousel-slide-div">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
                        />
                    ))}
                </div>

                <div className="dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)} // Dot click पर image change करना
                        ></span>
                    ))}
                </div>
            </div>
        </>

    );
};

export default CarouselComponent;

