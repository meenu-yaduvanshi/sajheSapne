import "../styles/partnerContentLogo.css"
import CarouselPartner from "./CarouselPartner"
import CarouselMedia from "./CarouselMedia"
import MediaCarouselDesktop from './MediaCarouselDesktop.jsx';

function PartnerContentLogo() {


    return (
        <>
            <div className="partner-contents-container">
                <div className="workcultureimg-div">
                    <img id="innovation-img" src="homeImg/innovation.png" alt="" />
                </div>
                <div className="heading-innovate"><h1 id="partner-h1">Innovate Work Culture with Rural Women -</h1>
                    <h1 id="partner-h2">Action for Change! </h1></div>
                <div className="para-2"><p>Sajhe Sapne is championing employ - ment and employability for rural India.</p></div>
                <div className="carousel-container"><CarouselPartner /></div>
                <div><p>So far, these progressive organizations who have hired Sapnewaalis are walking the talk of allyship! </p></div>
                <div><p>These organizations truly understand the business power and the social impact of hiring from unconventional talent pools. Our alumni offer higher retention rates and low hiring costs to the businesses. Their hunger to learn and take feedback is cherry on top.</p></div>
                <div><p>By Hiring a Sapnewaali, you tick off your compliances and build leaderships in grassroots and at your workplace – <br /> <span id="build-nation">you build a nation.</span></p></div>
                <div><button className="perks-hire">Perks of hiring a Sapnewaali</button></div>
                <div className="media-contents-container">
                    <h1 id="media-reco">Media Recognition</h1>
                    <div className="media-carousel-container">
                        <CarouselMedia />
                        <MediaCarouselDesktop />
                    </div>
                </div>
            </div>

        </>
    )
}


export default PartnerContentLogo