import React, { useState, useEffect } from 'react';
import '../styles/carouselmedia.css';

const CarouselMedia = () => {
  const [click, setClick] = useState(0);

  const imgArray = [
    [
      "mediaRecoImg/img1.png",
      "mediaRecoImg/img2.jpg",
      "mediaRecoImg/img3.jpg",
      "mediaRecoImg/img4.png",
    ],
    [
      "mediaRecoImg/img5.png",
      "mediaRecoImg/img6.png",
      "mediaRecoImg/img7.png",
      "mediaRecoImg/img8.png",
    ],
    [
      "mediaRecoImg/img9.png",
      "mediaRecoImg/img10.png",
      "mediaRecoImg/img11.png",
      "mediaRecoImg/img12.png",
      "mediaRecoImg/img13.png"
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