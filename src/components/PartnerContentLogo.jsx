import "../styles/partnerContentLogo.css"
import CarouselPartner from "./CarouselPartner"
import CarouselMedia from "./CarouselMedia"

function PartnerContentLogo() {


    return (
        <>
            <div className="partner-contents-container">
                <div className="workcultureimg-div">
                    <img id="innovation-img" src="homeImg/innovation.png" alt="" />
                </div>
                <div className="heading-innovate">
                    {/* <h1 id="partner-h1">Innovate Work Culture with Rural Women -</h1> */}
                    <h1 id="partner-h2">Hire Rural, Build Nation </h1>
                </div>
                {/* <div className="para-2"><p>Sajhe Sapne is championing employ - ment and employability for rural India.</p></div> */}
                <div className="carousel-container"><CarouselPartner /></div>
                <div><p id="make-your">Make your business thrive with rural potential.
                    Invest in the success of your business by improving the diversity in your team, retention rates and reducing the hiring cost of talent.</p></div>
                <div><p id="build-resilient">Build resilient rural communities & strong economies. </p></div>
                <div><p>Be part of something bigger than your business.    </p></div>
                <div><button className="perks-hire">Hire a Sapnewaali</button></div>
                <div>
                    <h1 id="testi-heading">Employer Testimonials</h1>
                    <div><button className="become-hire-partner-button">Become a hiring partner</button></div>

                </div>
                <div className="media-contents-container">
                    <h1 id="media-reco">In The News</h1>
                    <div className="media-carousel-container">
                        <CarouselMedia />
                    </div>
                </div>
                <div>
                    <h1 id="our-story-heading">Our Story</h1>
                    <div><button className="perks-hire">Join us</button></div>
                </div>
                <div id="figuring-out-div">
                    <h1 id="figuring-it-out">Sapnewaalis Figuring it Out</h1>
                    <div><button className="sign-up-now-button">Sign up now</button></div>
                </div>
            </div>

        </>
    )
}


export default PartnerContentLogo