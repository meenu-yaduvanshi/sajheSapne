import React, { useState, useEffect } from 'react';
import '../styles/mediaSlideshow.css';

const MediaSlideshow = () => {
    const [click, setClick] = useState(0);

    const imgArray = [
        [
            "src/assets/homeImg/newMediaImg/13.png",
            // "src/assets/homeImg/newMediaImg/10.png",
            // "src/assets/homeImg/newMediaImg/1.png",
            "src/assets/homeImg/newMediaImg/Media-01.png",
            "src/assets/homeImg/newMediaImg/Media-02.png",
            "src/assets/homeImg/newMediaImg/Media-03.png",
            // "src/assets/homeImg/newMediaImg/9.png",
            // "src/assets/homeImg/newMediaImg/3.png",
            // "src/assets/homeImg/newMediaImg/12.png",
        ],
        [
            "src/assets/homeImg/newMediaImg/5.png",
            "src/assets/homeImg/newMediaImg/8.png",
            // "src/assets/homeImg/newMediaImg/11.png",
            // "src/assets/homeImg/newMediaImg/6.png",
            // "src/assets/homeImg/newMediaImg/4.png",
            // "src/assets/homeImg/newMediaImg/2.png",
            // "src/assets/homeImg/newMediaImg/7.png"
        ]
    ]

// Automatic slide effect using useEffect
// useEffect(() => {
//     const interval = setInterval(() => {
//         setClick((prevClick) => (prevClick + 1) % imgArray.length); // Auto slide every few seconds
//     }, 3000); 

//     // Cleanup interval when component unmounts
//     return () => clearInterval(interval);
// }, [imgArray.length]);

const handleNextClick = () => {
    setClick((prevClick) => (prevClick + 1) % imgArray.length); // Go to next image set
};

const handlePrevClick = () => {
    setClick((prevClick) => (prevClick - 1 + imgArray.length) % imgArray.length); // Go to previous image set
};

return (
    <>
        <div className='container'>
            <button onClick={handlePrevClick}>&#60;</button>
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
            <button onClick={handleNextClick}>&#62;</button>
        </div>
    </>
);
};

export default MediaSlideshow;
