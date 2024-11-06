import '../styles/powerOfEarning.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer.jsx'
import CarouselPartner from '../components/CarouselPartner'

function PowerOfEarning() {
    return (
        <>
            <Nav />
            <div id="learning-main-parent">
                <img src="https://placehold.co/280x200" alt="" />
                <h1 className="banner-2">Change career norms in villages, one hire at a time</h1>
                <button className="pledge-support">Hire a Sapnewaali | Become a partner</button>

                <div className="sections" id="section-2">
                    <img src="https://placehold.co/280x200" alt="" />
                    <h2 className="h2-partner-progress">Partner for Progres, where businesses meet rural talent</h2>
                    <p className='parass'>
                        With Sajhe’s support rural women launch their careers in management roles. <br />
                        We do this by creating hiring opportunities both for progressive businesses and rural women.

                    </p>
                <div>
                        <p id='opportunities-for-buss-p'>Opportunity for Businesses</p>
                        <ul id='opportunities-for-buss-ul'>
                            <li>To increase credibility in the community</li>
                            <li>To complete Compliances</li>
                            <li>To access incentives by government</li>
                            <li>To build stronger teams</li>
                        </ul>
                    </div>
                    <div>
                        <p>Opportunities for Rural Women</p>
                        <ul id='Opportunities-for-Rural-Women-ul'>
                            <li>To shift gender norms in the community</li>
                            <li>To increase professional network</li>
                            <li>To build a career pathway</li>
                            <li>To contribute to family and villages' economy</li>
                        </ul>
                    </div>
                    <button className="become-a-partner">Become a Partner</button>
                </div>

                <div className="sections" id="section-4">
                    <h2 className="h2-we" id='progressive-and-proud'>Progressive And Proud Employers</h2>
                    <CarouselPartner />
                    <button className="new-one" id='hire-sapnewaali-bu'>Become a partner</button>
                </div>

                <div className="sections" id="section-3">
                    <img src="https://placehold.co/280x200" alt="" />
                    <h2 className="h2-we" id="local-culture">Simplifying Hiring For Rural Talent</h2>
                    <p>
                        To ensure ease in onboarding rural talent from Sajhe Sapne by being involved in
                    </p>
                    <ul id='Opportunities-for-Rural-Women-ul'>
                        <li>Zero Hiring cost</li>
                        <li>Seamless hiring processes</li>
                        <li>Solid Retention mechanisms</li>
                        <li>Access to govt incentives</li>
                    </ul>
                    <button className="become-a-partner">Tell us your hiring requirements</button>
                </div>

                <div className="sections" id="section-5">
                    <img src="https://placehold.co/280x200" alt="" />
                    <h2 className="h2-we">Participating in PM internship scheme with rural women</h2>
                    <p className='parass'>
                        Increasing rural women's participation in PM internship scheme and more
                        We work closely with rural women, government agencies and businesses to participate and benefit from government schemes like The PM internship scheme and more. <br /> <br />
                        With connections in over 60+ villages and 7+ states, and partnerships with businesses, the employee hiring under government portals becomes simpler with Sajhe Sapne

                    </p>
                    <button className="new-one">Join</button>
                </div>

                <div className="sections" id="section-6">
                    <h2 className="h2-we" id='helping-govn'>Progressing Businesses and Villages</h2>
                    <p>Villages</p>
                    <ol id='Opportunities-for-Rural-Women-ul'>
                        <li>
                            Breaking patrilineal norms such as early marriages, domestic violence, financial dependence, early pregnancies
                        </li>
                        <li>Rural economic development</li>
                    </ol>
                    <p>
                        Businesses
                    </p>
                    <ol id='Opportunities-for-Rural-Women-ul'>
                        <li>Contribution to real rural development</li>
                        <li>Unlearning rural biases</li>
                    </ol>
                </div>

                <div className="sections" id="section-8">
                    <h2 className="h2-we">Profiles Of Your Next Hire</h2>
                    <div className='round-img-con'>
                        <div className='round-img'></div>
                        <div className='round-img'></div>
                        <div className='round-img'></div>
                    </div>
                    <button className="new-one">Hire a Sapnewaali</button>
                </div>

                <div className="sections" id="section-9">
                    <h2 className="h2-we">Why hire Sapnewaalis</h2>
                    <p className='parass'>
                        Sapnewaalis are women with fire in the belly ready to learn, earn and excel <br />
                        Trained in problem solving <br />
                        Confident professional hungry to learn <br />
                        Anchored by values that build relationships <br />

                    </p>
                    <button className="new-one">Hire a Sapnewaali</button>
                </div>

            </div>
<Footer/>
        </>
    )
}

export default PowerOfEarning