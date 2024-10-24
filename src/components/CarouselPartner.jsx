// import React from "react";
import React, { useState, useEffect } from 'react';
import '../styles/carouselPartner.css';

const ImageCarousel = () => {
   const [click, setClick] = useState(0);

  const imgArray = [
    [
      "Partnerslogo/image1.png",
      "Partnerslogo/image2.jpg",
      "Partnerslogo/image3.png",
      "Partnerslogo/image4.png",
    ],
    [
      "Partnerslogo/image5.PNG",
      "Partnerslogo/image6.png",
      "Partnerslogo/image7.png",
      "Partnerslogo/image8.png"
    ],
    [
      "Partnerslogo/image9.jpg",
      "Partnerslogo/image10.jpg",
      "Partnerslogo/image11.png",
      "Partnerslogo/image12.jpg"
    ],
    [
      "Partnerslogo/image13.png",
      "Partnerslogo/image14.png",
      "Partnerslogo/image15.png",
      "Partnerslogo/image16.jpg"
    ],
    [
      "Partnerslogo/image17.png",
      "Partnerslogo/image18.png",
      "Partnerslogo/image19.png",
      "Partnerslogo/image20.jpg"
    ],
    [
      "Partnerslogo/image21.png",
      "Partnerslogo/image22.jpg",
      "Partnerslogo/image23.png",
      "Partnerslogo/image24.jpg"
    ],
    [
      "Partnerslogo/image25.png",
      "Partnerslogo/image26.png",
      "Partnerslogo/image27.svg",
      "Partnerslogo/image28.jpg"
    ],
    [
      "Partnerslogo/image29.png",
      "Partnerslogo/image30.jpg",
      "Partnerslogo/image31.png",
      "Partnerslogo/image32.png"
    ]
  ]

  // Automatic slide effect using useEffect
  useEffect(() => {
      const interval = setInterval(() => {
          setClick((prevClick) => (prevClick + 1) % imgArray.length); // Auto slide every few seconds
      }, 3000); 

      // Cleanup interval when component unmounts
      return () => clearInterval(interval);
  }, [imgArray.length]);

  return (
    <>
      <div className='partner-container'>
        {/* <button onClick={handlePrevClick}>&#60;</button> */}
        {imgArray[click].map((imgSrc, index) => (
          <div key={index} className="image-wrapper">
            <img
              className='images'
              id={`img-${index + 1}`}
              src={imgSrc}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
        {/* <button onClick={handleNextClick}>&#62;</button> */}
      </div>
    </>
  );
};

export default ImageCarousel;