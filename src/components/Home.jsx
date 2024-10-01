import React from 'react';
import '../styles/home.css';
// import Footer from "./Footer"


const Home = () => {

    return (
        <>
            <div id='banner-con'>
                <div id='bn-text-con'>
                    <p>One Day.. <br />
                        One day, women of Indian villages will be known <br />
                        for their potential, not their pain <br />
                        for their aspirations, not their needs <br />
                        for being leaders, not being led <br />
                        We will make it happen, one Sapna Center at a time.
                    </p>
                </div>
                <img className='banner-image' src="../src/assets/bn.jpg" alt="" />


                <div className='child-parent'>
                    <div className='child'>
                        <p>
                            A Movement in Making in Villages <br />
                            In many villages, when young women continue their education after 12th, <br />
                            get a high paying job, or choose her own life partner, it becomes news. <br />
                            We are making rural women’s social & financial freedom a norm, not news.
                        </p>
                        <p>
                            Through our district centric Kaabil Kamau Kamyaab campaigns, we’re sparking a cultural shift.
                            By bringing together allies — government, businesses, young women & their communities — we create pathways for rural women to learn, earn, and excel in the modern world.
                            As much as learning & earning of one Sapnewaali matters to us, so does the change in the way their villages and broader society treats them.
                        </p>
                        <button class="move">Make the movement with us</button>
                    </div>
                    <div className='child' id='img-1'></div>
                    <div className='child' id='img-2'></div>
                    <div className='child'>
                        <p>
                            Launch Careers, Not Livelihoods <br /><br />

                            Sapna Centers, our unique rural college model, offers year+ long mini-MBA training to young rural women.
                            <br /><br />

                            They not only enter but thrive in domains where their entry is not even imagined right now.
                            <br /><br />
                            They help progressive organisations grow by becoming confident professionals in profiles of operations, facilitation, field research, communications among others.
                            <br /><br />
                            For the longest time in India, rural women have been offered very stereotypical livelihoods such as farming, “Silai-kadai-bunai” or papad-pickle production. All dignified but limiting professions.
                            <br /><br />
                            A person can do this work for many years and yet not see any real growth in skills, salary and network. Essentially, trapping the person in a livelihood often from specific caste groups and snatching a choice of growth possibilities.
                            <br /><br />
                            We are determined to shift the narrative from livelihoods to career growth pathways for young rural women coming from Dalit, Bahujan and Adivasi communities.
                        </p>
                        <button class="know-more-sapna">Know more about Sapna Centers</button>
                    </div>
                </div>
            </div>
            <div className='section-real-story'>
                <p id='real-story-p'>Real Stories. Real Change.</p>
                <div className='grid-container'>
                    <div id='child-num-1' className='grid-container-child'><p>Sapnewaali Alisha, whose marriage was arranged at 2, joined our year long program as a new obedient bride at 18 making sure her head was always covered with a dupatta.</p></div>
                    <div id='child-num-2' className='grid-container-child'><p></p></div>
                    <div id='child-num-3' className='grid-container-child'><p>Alisha became the first in our inaugural cohort to turn her internship into a Communications Associate role. <br /> <br />
                        When we shared the news the Sapnewaalis cheered, lifting her into the air. Her dupatta slipped from her head for the first time in six months — a sight I had never seen before. <br /> <br />
                        That moment was pure magic. And we get to witness many such powerful moments with Sapnewaalis’ each life and career milestone.</p></div>
                    <div id='child-num-4' className='grid-container-child'><p>She had joined the program fully convinced she'd never get a job.</p></div>
                    {/* <div className='grid-container-child'></div> */}
                </div>
            </div>

            {/* <div className='partners-logo'>
                <p id='bring-rural'>Let’s Bring Rural Women in Fortune 500 Companies</p>
                <div className='partner-logo-container'>
                        <div class="image-container">
                            <img id='img-1' src="../src/assets/Partners-01.png" alt="" />
                        </div>
                        <div class="image-container">
                            <img id='img-2' src="../src/assets/Partners-02.png" alt="" />
                        </div>
                        <div class="image-container">
                            <img id='img-3' src="../src/assets/Partners-03.png" alt="" />
                        </div>
                        <div class="image-container">
                            <img  id='img-4' src="../src/assets/Partners-04.png" alt="" />
                        </div>
                </div>
                <img src="../src/assets/Partners-01.png" alt="" />
            </div> */}
        </>
    )
}
export default Home;
