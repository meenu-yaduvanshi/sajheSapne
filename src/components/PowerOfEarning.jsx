import '../styles/powerOfEarning.css'
import Nav from '../components/Nav'
import CarouselPartner from '../components/CarouselPartner'
import Footer from './Footer';


function PowerOfEarning(){
    return(
        <>
        <Nav />
            <div id="learning-main-parent">
                <img src="https://placehold.co/280x200" alt="" />
                <h1 className="banner-2">Be Progressive Hire Rural</h1>
                <button className="pledge-support">Pledge Support</button>

                <div className="sections" id="section-2">
                    <img src="https://placehold.co/280x200" alt="" />
                    <h2 className="h2-we">Power Of Earning</h2>
                </div>

                <div className="sections" id="section-3">
                    <img src="https://placehold.co/280x200" alt="" />
                    <h2 className="h2-we" id="local-culture">Simplifying Hiring For Rural Talent</h2>
                    <button className="become-a-partner">Become a Partner</button>
                </div>

                <div className="sections" id="section-4">
                    <h2 className="h2-we" id='progressive-and-proud'>Progressive And Proud Employers</h2>
                    <CarouselPartner />
                    <button className="new-one" id='hire-sapnewaali-bu'>Hire a Sapnewaali</button>
                </div>

                <div className="sections" id="section-5">
                    <img src="https://placehold.co/280x200" alt="" />
                    <h2 className="h2-we">Become A Hiring Partner</h2>
                    <button className="new-one">Become a Hiring Partner</button>
                </div>

                <div className="sections" id="section-6">
                    <h2 className="h2-we" id='helping-govn'>Helping Government Policies For Employement Reach Rural Women</h2>
                </div>

                <div className="sections" id="section-7">
                    <h2 className="h2-we">Impact On Villages And Businesses</h2>
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
                    <h2 className="h2-we">Solve Hiring Inequality With Us</h2>
                    <button className="new-one">Champion Inclusive Hiring</button>
                </div>

            </div>
<Footer/>
        </>
    )
}

export default PowerOfEarning