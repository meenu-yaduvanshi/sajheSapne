import React from 'react';
// import '../styles/DonateNow.css'; // Import the CSS file
import '../styles/donateButton.css'; // Import the CSS file
import { Link } from 'react-router-dom';



const DonateButton = () => {
    // const handleClick = () => {
    //     // Add your donation logic here
    //     alert('Thank you for your donation!');
    // };

    return (
        <Link to={'/donateButton'}>
            <button className="donate-button">
                Donate Now
            </button>
            </Link>

        // <button className="donate-button" onClick={handleClick}>
        //     Donate Now
        // </button>
            );
};

            export default DonateButton;