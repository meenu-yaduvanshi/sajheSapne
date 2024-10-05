import React, { useState, useEffect } from 'react';
import '../styles/mediaSlideshow.css';

const CarouselMedia = () => {
   const [click, setClick] = useState(0);

  const imgArray = [
    [
      "../src/assets/mediaRecoImg/img1.png",
      "../src/assets/mediaRecoImg/img2.jpg",
      "../src/assets/mediaRecoImg/img3.jpg",
      "../src/assets/mediaRecoImg/img4.png",
    ],
    [
      "../src/assets/mediaRecoImg/img5.png",
      "../src/assets/mediaRecoImg/img6.png",
      "../src/assets/mediaRecoImg/img7.png",
      "../src/assets/mediaRecoImg/img8.png",
    ],
    [
      "../src/assets/mediaRecoImg/img9.png",
      "../src/assets/mediaRecoImg/img10.png",
      "../src/assets/mediaRecoImg/img11.png",
      "../src/assets/mediaRecoImg/img12.png",
    ],
  ]

  useEffect(() => {
      const interval = setInterval(() => {
          setClick((prevClick) => (prevClick + 1) % imgArray.length);
      }, 3000); 
      return () => clearInterval(interval);
  }, [imgArray.length]);

  return (
    <>
      <div className='container'>
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
      </div>
    </>
  );
};

export default CarouselMedia;