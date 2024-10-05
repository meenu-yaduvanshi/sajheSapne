// import React from "react";
import React, { useState, useEffect } from 'react';
import '../styles/carouselPartner.css';

const ImageCarousel = () => {
   const [click, setClick] = useState(0);

  const imgArray = [
    [
      "../src/assets/Partnerslogo/image1.png",
      "../src/assets/Partnerslogo/image2.jpg",
      "../src/assets/Partnerslogo/image3.png",
      "../src/assets/Partnerslogo/image4.png",
    ],
    [
      "../src/assets/Partnerslogo/image5.PNG",
      "../src/assets/Partnerslogo/image6.png",
      "../src/assets/Partnerslogo/image7.png",
      "../src/assets/Partnerslogo/image8.png"
    ],
    [
      "../src/assets/Partnerslogo/image9.jpg",
      "../src/assets/Partnerslogo/image10.jpg",
      "../src/assets/Partnerslogo/image11.png",
      "../src/assets/Partnerslogo/image12.jpg"
    ],
    [
      "../src/assets/Partnerslogo/image13.png",
      "../src/assets/Partnerslogo/image14.png",
      "../src/assets/Partnerslogo/image15.png",
      "../src/assets/Partnerslogo/image16.jpg"
    ],
    [
      "../src/assets/Partnerslogo/image17.png",
      "../src/assets/Partnerslogo/image18.png",
      "../src/assets/Partnerslogo/image19.png",
      "../src/assets/Partnerslogo/image20.jpg"
    ],
    [
      "../src/assets/Partnerslogo/image21.png",
      "../src/assets/Partnerslogo/image22.jpg",
      "../src/assets/Partnerslogo/image23.png",
      "../src/assets/Partnerslogo/image24.jpg"
    ],
    [
      "../src/assets/Partnerslogo/image25.png",
      "../src/assets/Partnerslogo/image26.png",
      "../src/assets/Partnerslogo/image27.svg",
      "../src/assets/Partnerslogo/image28.jpg"
    ],
    [
      "../src/assets/Partnerslogo/image29.png",
      "../src/assets/Partnerslogo/image30.jpg",
      "../src/assets/Partnerslogo/image31.png",
      "../src/assets/Partnerslogo/image32.png"
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
      <div className='container'>
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