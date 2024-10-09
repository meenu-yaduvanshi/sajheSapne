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
                            for being leaders, not being led <br />
                            We will make it happen, <br />
                            one Sapna Center at a time.
                        </span> </p>
                    <h1 id='sajhe-sapne'>Sajhe Sapne</h1>
                </div>
                <div>
                    <p>
                        Sajhe Sapne is a non-profit set on a mission to make rural women’s social and financial freedoms a norm by
                        bringing them opportunities to <br /> <span id='learn-earn-excel'> Learn, Earn and Excel.</span>
                    </p>
                    <button className="become-ally button">Become an Ally</button>
                </div>

                <div className='kkk-div'>
                    <img src="homeImg/kkkIllustration.png" alt="kkk-illustration" width="300" />
                    {/* <h1 id='kkk' className='blue-head'>काबिल, कमाऊ, कामयाब -</h1> */}
                    <h1 id='campaign' className='pink-head'>Campaign of Change!</h1>
                    <p>
                        In many villages, when young women continue their education after 12th, get a high paying job, or choose her
                        own life partner, it becomes news. <br /> <br />
                        We are making rural women’s social & financial freedom a norm, not news.
                        <br /> <br />
                        Through our district centric <span>Kaabil Kamau Kamyaab </span>  campaigns, we’re sparking a cultural shift.
                        By bringing together allies — government, businesses, young women & their communities — we create pathways
                        for rural women to learn, earn, and excel in the modern world. <br /> <br />
                        As much as learning & earning of one Sapnewaali matters to us, so does the change in the way their villages
                        and broader society treats them.
                    </p>
                    <button className="join-campaing button">Join the campaign</button>
                </div>

                <div className='launching-div'>
                    <div className="mypic-div">
                        <img src="homeImg/myPic.jpeg" alt="teach-board-pic" />
                    </div>
                    <h1 id='launching' className='blue-head'>Launching Careers,<br /> Not Livelihoods - </h1>
                    <h1 id='livelihoods' className='pink-head'>Method of Change!</h1>
                    <p>
                        Sapna Centers, our unique rural college model, offers year+ long mini-MBA training to young rural women. <br /><br />
                        Our pedagogy thrives on contextual content that has global applications! <br /> <br />
                        With their training at Sapne Centres, Sapnewaalis learn to thrive in domains where their entry is not even
                        imagined right now. <br /> <br />
                        They help progressive organizations grow by becoming confident professionals in profiles of operations,
                        facilitation, field research, communications among others. <br /> <br />
                        Sajhe Sapne's rural college model solves the limitations of livelihood training for young rural women with
                        its focus on career growth pathways and a visible increase in skill, salary and social circle over the
                        years. <br /> <br />
                        We are determined to shift the narrative from livelihoods to career growth pathways for young rural women
                        coming from Dalit, Bahujan and Adivasi communities. <br />
                    </p>
                    <button className="know-sapna-center button">Know more about Sapna Centres</button>
                </div>
                <div className='sw-figuringout-div'>
                    <div className="scooty-girl-div">
                        <img src="homeImg/scooty.png" alt="scooty-illus" id='scooty-img'/>
                    </div>
                    <h1 id='finguring-out' className='blue-head'>Sapnewaalis Figuring it Out -</h1>
                    <h1 id='stories' className='pink-head'> Stories of Change!</h1>
                    <p>
                        Sapnewaali Alisha, whose marriage was arranged at 2, joined our year long program as a new obedient bride at
                        18 making sure her head was always covered with a dupatta. <br /><br />
                        She had joined the program fully convinced she'd never get a job. <br />
                        Alisha became the first in our inaugural cohort to turn her internship into a Communications Associate role. <br /><br />
                        When we shared the news the Sapnewaalis cheered, lifting her into the air. Her dupatta slipped from her head
                        for the first time in six months — a sight I had never seen before. <br /><br />
                        That moment was pure magic. And we get to witness many such powerful moments with Sapnewaalis’ each life and
                        career milestone.
                    </p>
                    <button className="become-patron button">Become a patron for Sapnewaalis</button>
                </div>
            </div>
            
            <PartnerContentLogo />
        </>
    )
}
export default Home;
