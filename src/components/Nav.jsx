import '../styles/nav.css'
import Hamburger from './Hamburger'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>

            <nav className="navbar">
                <div className='nav-contact-div'>
                    <div className='ft-contacttext-div'>
                        <ul>
                            <li className='no-bullet-in-nav'>sapnewaalis@gmail.com</li>
                            <li>+91- 80910 93301</li>
                        </ul>
                    </div>
                    <div className='ft-icon-div'>
                        <ul>
                            <li className='no-bullet-in-nav'> <a href=""> <img src="footerImg/instagram4.png" alt="" id='first-icon' className='nav-icon' /> </a></li>
                            <li><a href=""> <img src="footerImg/instagram4.png" alt="" id='second-icon' className='nav-icon' /> </a></li>
                            <li> <a href=""> <img src="footerImg/instagram4.png" alt="" id='tird-icon' className='nav-icon' /> </a></li>
                        </ul>
                    </div>
                </div>
                <section className='nav-links-div'>
                    <img src="logo.png" id='logo-desktop' alt="" />
                    <ul>
                        <a href="#"><li>Power of Learning <p>काबिल</p></li></a>
                        <li>+</li>
                        <a href="#"><li>Power of Earning<p>कमाऊ</p></li></a>
                        <li>+</li>
                        <a href="#"><li>Power of Collective<p>कामयाब</p></li></a>
                        <li>=</li>
                        <a href="#"><li>Freedom</li></a>

                    </ul>
                    <button id='nav-get-involved-btn'>Get involved</button>
                </section>




                <section className='hamburger-div'>
                    <Hamburger />
                    <Link to={'/homepage'}><img id='logo' src="logo.png" alt="logo" /></Link>
                    <Link to={'/donatenow'}><button id='donte-now-button'>Donate Now </button></Link>
                </section>
            </nav >

        </>
    )
}
export default Nav