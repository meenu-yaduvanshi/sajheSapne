import React from 'react';
import '../styles/home.css';
// import Footer from "./Footer"


const Home = () => {

    return (
        <>
            {/* <img className='sapnacenter-img' src="src/assets/homeImg/sapnacentre.png" alt="" />*/}
            <img src="https://placehold.co/1820x600" alt="" />
            <div className="custom-layout">

                <div className="container">
                    <div className="section about-section">
                        <div className="image-placeholder"></div>
                        <div className="text-content">
                            <h2>About Sajhe Sapne</h2>
                            <p>Empowering a generation of marginalized young rural women to learn, earn, & excel in the modern workforce.</p>
                            <button>Learn more about our program</button>
                        </div>
                    </div>
                </div>

                <div className="middle-banner">
                    <p>सच्ची पक्की गुणी ज़िद्दी दिलकी क्यों क्यों क्यों…..</p>
                </div>
                <div className="container">
                    <div className="section sapnewaali-section">
                        <div className="text-content">
                            <h2>Who is a Sapnewaali?</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <button>Get Involved</button>
                        </div>
                        <div className="image-placeholder"></div>   
                    </div>
                </div>


                <div className="text-banner darkblue">
                    <p>This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='devide-darkLigthBule'>

                </div>
                <div className="text-banner lightblue">
                    <p>This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>

                <div className="supporters-section">
                    <h1>Our Supporters and Funders</h1>
                    {/* <div className="supporters-logos"> */}
                    {/* <img src="/path/to/meta-logo.png" alt="Meta" />
                        <img src="/path/to/samjika-logo.png" alt="Samjika" />
                        <img src="/path/to/capri-logo.png" alt="CAPRI" />
                        <img src="/path/to/parwah-logo.png" alt="Parwah" />
                        <img src="/path/to/cnt-logo.png" alt="CNT" /> */}
                    {/* <img src="src/assets/partnerships.png" alt="" /> */}
                    {/* </div> */}
                </div>
                {/* <img className='blue-nature' src="src/assets/homeImg/blueNature.png" alt="blue nature img" /> */}
                <img src="https://placehold.co/1820x300" alt="" />
                <img src="https://placehold.co/1820x600" alt="" />
            </div>
{/* <Footer/> */}
        </>
    )
}
export default Home;
