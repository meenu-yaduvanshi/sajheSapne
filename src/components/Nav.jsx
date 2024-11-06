import '../styles/nav.css'
import Hamburger from './Hamburger'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>

            <nav className="navbar">
                <div className='pinknav-div'>
                    <div className='contact-text-div'>
                        <ul>
                            <li className='no-bullet-in-nav'>sapnewaalis@gmail.com</li>
                            <li>+91- 80910 93301</li>
                        </ul>
                    </div>
                    <div className='social-icon-div'>

                        <ul>
                            <li id='no-bullet-in-nav'><a href="https://www.instagram.com/sapnewaali?igsh=MWwwYW9vdTV6MXFrdQ==" target='blanck' >
                                <img src="socialmediaIcons/newInstagram.png" className='nav-icon' />
                            </a></li>

                            <li><a href="https://www.youtube.com/watch?v=02sOhwJnPdo" target='blanck'>
                                <img src="socialmediaIcons/newYoutube.png" className='nav-icon' />
                            </a></li>

                            <li> <a href="https://in.linkedin.com/company/sajhe-sapne" target='blanck'>
                                <img src="socialmediaIcons/newIn.png" className='nav-icon' />
                            </a></li>
                        </ul>

                    </div>
                </div>

                <section className='greynav-div'>
                    <div>
                        <Link to={'/homepage'}> <img src="logo.png" id='logo-desktop' alt="" /></Link>
                    </div>
                    <div>
                        <ul>
                            <Link to={'/powerOfLearning'}>
                                <li>Power of Learning <p>काबिल</p> </li>
                            </Link>
                            <li className='plus' id='symbol'>+</li>

                            <Link to={'/powerOfEarning'}>
                                <li>Power of Earning <p>कमाऊ</p></li>
                            </Link>
                            <li className='plus' id='symbol' >+</li>

                            <Link to={'/powerOfCollective'}>
                                <li>Power of Collective <p>कामयाब</p></li>
                            </Link>
                            <li className='plus' id='symbol' >=</li>

                            <Link to={'/freedom'}>
                                <li className='freedom'>Freedom <p>तरक्की और आज़ादी</p> </li>
                            </Link>
                            <Link to={'/getinvolved'}>
                                <li id='get-involved'>Get involved</li>
                            </Link>
                        </ul>
                    </div>
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