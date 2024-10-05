import React from 'react';
import '../styles/footer.css'

const Footer = () => {

    return (
        <>
            <footer>
                <div className='newsletter'>
                    <h3>Join our Newsletter</h3>
                    <form>
                        <input type="email" placeholder="Your email address" className="email-input"/>
                        {/* <button type="submit" className="submit-btn">Subscribe</button> */}
                        <button className="submit-btn" type='submit'>Subscribe</button>
                    </form>
                </div>
                <hr className='hr' />

                <div className='contact-container'>
                    <div>
                        <p>Reach out to us at</p>
                        <ul>
                            <li>sapnewaalis@gmail.com</li>
                            <li>+91- 80910 93301</li>
                        </ul>
                    </div>
                </div>
                <hr className='hr' />
                <div className='links'>
                    <p>LINKS</p>
                    <ul>
                        <li><a href="#">Power of Learning</a></li>
                        <li><a href="#">Power of Earning</a></li>
                        <li><a href="#">Power of Collective</a></li>
                        <li><a href="#">Idea of Freedom</a></li>
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



                <hr className='hr' />
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