import React from 'react';
import '../styles/home.css';
import PartnerContentLogo from './PartnerContentLogo.jsx';
import Carousel from './Carousel.jsx';
import { prefix } from '@fortawesome/free-solid-svg-icons';


const Home = () => {

    return (
        <>
            <Carousel />
            <div className="containers">
                <div className='poem-para'>
                    <p>
                        One day, women of Indian villages<br />
                        will be known <br />
                        <span>
                            for their potential, not their pain <br />
                            for their aspirations, not their needs <br />
                            for being leaders, not being led. <br />
                            We will make it happen, <br />
                            one Sapna Center at a time.
                        </span> </p>
                    {/* <h1 id='sajhe-sapne'>Sajhe Sapne</h1> */}
                </div>
                {/* <div>
                    <p>
                        Sajhe Sapne is a non-profit set on a mission to make rural women’s social and financial freedoms a norm by
                        bringing them opportunities to <br /> <span id='learn-earn-excel'> Learn. Earn. Excel.</span>
                    </p>
                    <button className="become-ally button">Become an Ally</button>
                </div> */}

                <div className='launching-div'>
                    <div className="mypic-div">
                        <img src="homeImg/myPic.jpeg" alt="teach-board-pic" />
                    </div>
                    <h1 id='launching' className='blue-head'>Launching Careers,<br /> Not Livelihoods - </h1>
                    {/* <h1 id='livelihoods' className='pink-head'>Method of Change!</h1> */}
                    <p id='dalit'>
                        Dalit, Bahujan & Adivasi women in villages get trained in year-long mini-MBA programs with us.</p>
                    <p> We use regional languages & culture to teach modern age skills. Our local curriculum opens global doors.</p>
                    <p> <span id='they-become-con-pro'> They become confident professionals </span> in domains like operations, communications, field research, program design - roles once unimaginable for them.</p>
                    <p id='we-go-beyond'>We go beyond stereotypical livelihood models like “silai-kadai-bunai” for rural women.</p>

                    <button className="know-sapna-center button">Learn More</button>
                </div>

                <div className='kkk-div'>
                    <div className='kkkillus-div'>
                        <img src="homeImg/kkkIllustration.png" alt="kkk-illustration" />
                    </div>
                    {/* <h1 id='kkk' className='blue-head'>काबिल, कमाऊ, कामयाब -</h1> */}
                    <h1 id='campaign' className='pink-head'>Kaabil, Kamau, Kamyab: A Movement in Making</h1>
                    <p>We bring government, businesses & families together to kickstart a Kaabil Kamau Kamyaab movement. </p>
                    <p>   A movement to ensure that by 2030, at least 50% of young women finishing 12th in a state have <span id='steady-earning-opp'> steady earning opportunities </span> for a year.
                    </p>
                    <button className="join-campaing button">Get Involved</button>
                </div>


                <div className='sw-figuringout-div'>
                    <div className="scooty-girl-div">
                        <img src="homeImg/scooty.png" alt="scooty-illus" id='scooty-img' />
                    </div>
                    {/* <h1 id='finguring-out' className='blue-head'>Sapnewaalis Figuring it Out -</h1> */}
                    <h1 id='stories' className='pink-head'> Sapnewaalis - Women with Fire in Bellies </h1>
                    <p id='tribe-p'>
                        Our alumni’s career & life choices start trends for women in their villages. </p>
                    <p id='new-trends-family'>New Trends: Steady Income. High Mobility. Delayed Marriages. Say in the Family.</p>

                    <button className="become-patron button">Support a Sapnewaali</button>
                </div>
            </div>

            <PartnerContentLogo />
        </>
    )
}
export default Home;