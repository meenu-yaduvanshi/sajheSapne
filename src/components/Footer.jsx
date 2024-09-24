import React from 'react';
import '../styles/footer.css'

const Footer = () => {

    return (
        <>
            <footer>
                <div className='newsletter'>
                    <h3>Sign up for our Newsletter</h3>
                    <form>
                        <input type="email" placeholder="Your email address" class="email-input" />
                        <button type="submit" class="submit-btn">Subscribe</button>
                    </form>
                </div>

                <div className='links'>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Impact</a></li>
                        <li><a href="#">Success stories</a></li>
                    </ul>
                </div>
                <div className='contact-container'>
                    <div>
                        {/* <p className='contact-us'>Contact Us</p> */}
                        <ul>
                            <li className='contact-us'>Contact Us</li>
                            <li>sapnewaalis@gmail.com</li>
                            <li>+91- 80910 93301</li>
                        </ul>
                    </div>

                    {/* <div className='contact'>
                        <a href="#" className="fa fa-linkedin"></a>
                        <a href="#" className="fa fa-youtube"></a>
                        <a href="#" className="fa fa-instagram"></a>
                    </div> */}
                </div>
                <hr className='hr'/>

                <div className='copyrights'>
                    <ul>
                        <li className="no-bullet"   > <a href="#">Privacy Policy</a></li>
                        <li> <a href="#">Terms and Conditions</a></li>
                        <li> <a href="#">Charity Numbers</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
export default Footer

