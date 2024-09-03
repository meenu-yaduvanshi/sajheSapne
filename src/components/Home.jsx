import React from 'react';
import '../styles/home.css'

const Home = () => {

    return (
        <>
            <div className="custom-layout">

                {/* First Section: Image Card and About Section */}
                <div className="first-section">
                    <div className="image-card" style={{ backgroundImage: "url('src/assets/homeImg/img1.jpeg    ')" }}></div>
                    <div className="about-section">
                        <h2>About Sajhe Sapne</h2>
                        <p>Empowering a generation of marginalized young women to learn, earn, & excel in the modern workforce.</p>
                        <button className="learn-more-btn">Learn more about our program</button>
                    </div>
                </div>

                {/* Middle Text Banner */}
                <div className="middle-banner">
                    <p>हमारी चाहत पूरी होगी जिसमें तुम्हें नहीं लाएंगे....</p>
                </div>

                {/* Second Section: Sapnewaali Information */}
                <div className="second-section">
                    <div className="who-section">
                        <h2>Who is a Sapnewaali?</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className="learn-more-btn">Get Involved</button>
                    </div>
                    <div className="image-card" style={{ backgroundImage: "url('src/assets/homeImg/img1.jpeg')" }}></div>
                </div>

                {/* Text Banner */}
                <div className="text-banner">
                    <p>This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="text-banner">
                    <p>This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>

                {/* Supporters Section
                <div className="supporters-section">
                    <h3>Our Supporters and Funders</h3>
                    <div className="supporters-logos"> */}
                        {/* <img src="/path/to/meta-logo.png" alt="Meta" />
                        <img src="/path/to/samjika-logo.png" alt="Samjika" />
                        <img src="/path/to/capri-logo.png" alt="CAPRI" />
                        <img src="/path/to/parwah-logo.png" alt="Parwah" />
                        <img src="/path/to/cnt-logo.png" alt="CNT" /> */}
                {/* <img src="src/assets/partnerships.png" alt="" /> */}
                {/* </div>
                </div> */}
                <img className='supports-img' src="src/assets/partnerships.png" alt="" />

                {/* Video Section */}
                <div className="video-section">
                    <img src="/path/to/video-thumbnail.jpg" alt="Video thumbnail" />
                    <p>Fire in the Belly video</p>
                </div>

            </div>
        </>
    )
}
export default Home;
