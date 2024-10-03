import React from 'react';
import '../styles/DonateNow.css'; // Import the CSS file

const DonateButton = () => {
    const handleClick = () => {
        // Add your donation logic here
        alert('Thank you for your donation!');
    };

    return (
        <button className="donate-button" onClick={handleClick}>
            Donate Now
        </button>
    );
};

export default DonateButton;