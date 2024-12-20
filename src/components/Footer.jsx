import React from 'react';
import '../styles/footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {

    return (
        <>
            <div className='ft-illustratuin-div'>
                <img src="newfooter.png" alt="" id='footer-big-ills' />
                <img src="cropfooter.png" alt="footer-illustration" id='footer-ills' />
            </div>
            <footer>
                <div className='newsletter'>
                    <h3>Join our Newsletter</h3>
                    <form>
                        <input type="email" placeholder="Your email address" className="email-input" />
                        <button className="submit-btn" type='submit'>Subscribe</button>
                    </form>
                </div>
                <hr className='hr' />

                {/* <section className='ft-big-section'> */}
                <div className='contact-container'>
                    <div>
                        <p>REACH OUT TO US AT</p>
                        <ul>
                            <li>sapnewaalis@gmail.com</li>
                            <li>+91- 80910 93301</li>
                        </ul>
                    </div>

                    {/* <div className='ft-icon-div'>
                        <a href=""> <img src="footerImg/youtube.png" alt="" id='youtube' className='ft-icon' />  </a>
                        <a href=""> <img src="footerImg/instagram4.png" alt="" id='instagram' className='ft-icon' /> </a>
                        <a href="">  <img src="footerImg/linkedin2.png" alt="" id='linkedin' className='ft-icon' /> </a>
                    </div> */}

                    {/* <div>
                        <i class="fa fa-instagram"></i>
                        <a href=""> <i class="fa fa-linkedin"></i></a>
                        <a href=""> <i class="fa fa-youtube"></i></a>
                    </div> */}
                </div>

                <hr className='hr' />
                <div className='links'>
                    <p>LINKS</p>
                    <ul>
 
                    <Link to={'/powerOfLearning'}>
                    <li>Power of Learning</li>
                    </Link> 

                    <Link to={'/powerOfEarning'}>
                    <li>Power of Earning</li>
                    </Link>  

                    <Link to={'/powerOfCollective'}>
                    <li>Power of Collective</li>
                    </Link> 

                    <Link to={'/freedom'}>
                    <li>Idea of Freedom</li>
                    </Link> 

                        {/* <li><a href="#">Power of Learning</a></li>
                        <li><a href="#">Power of Earning</a></li>
                        <li><a href="#">Power of Collective</a></li>
                        <li><a href="#">Idea of Freedom</a></li> */}
                    </ul>
                </div>
                <hr className='hr' />
                <div className='links'>
                    <p>NETWORKING</p>
                    <ul>
                        <li><a href="#">Sajhe Sapne Team</a></li>
                        <li><a href="#">Careers at Sajhe Sapne</a></li>
                    </ul>
                </div>
                <hr className='hr' />
                <div className='links'>
                    <p>GET INVOLVED</p>
                    <ul>
                        <li><a href="#">Start a Sapne Center</a></li>
                        <li><a href="#">Become a Patron for a Sapnewaali</a></li>
                        <li><a href="#">Support Sajhe's Pedagogy Tools/Games</a></li>
                        <li><a href="#">Become a Ally</a></li>
                    </ul>
                </div>
                {/* </section> */}

                <hr className='hr' />
                <hr className="hr-for-desktop" />

                <div className='copyrights'>
                    <ul>
                        <li className="no-bullet"> <a href="#">Privacy Policy</a></li>
                        <li> <a href="#">Terms and Conditions</a></li>
                        <li> <a href="#">Charity Numbers</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
export default Footer