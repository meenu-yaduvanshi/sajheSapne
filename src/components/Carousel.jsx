import React, { useState, useEffect } from 'react';
import "../styles/carousel.css"

const CarouselComponent = () => {
    const images = [
        '../src/assets/homeCarousel/carousel-1.jpeg',
        '../src/assets/homeCarousel/carousel-2.jpg',
        '../src/assets/homeCarousel/carousel-3.jpg',
        '../src/assets/homeCarousel/carousel-4.jpeg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
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
    );
};

export default CarouselComponent;

