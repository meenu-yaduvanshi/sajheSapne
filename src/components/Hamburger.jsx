import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles/HamburgerMenu.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <button className="menu-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon style={{color:'#2A3787'}} icon={isOpen ? faTimes : faBars} />
            </button>
            {isOpen && (
                <div className="menu">
                    <ul>
                        <li>Power of Learning <FontAwesomeIcon  icon={faChevronDown} style={{ color: 'white', textAlign:'end', marginLeft:'52.3%',fontSize:'12px' }} /></li>
                        <li>Power of Earning <FontAwesomeIcon  icon={faChevronDown} style={{ color: 'white', marginLeft:'55%', fontSize:'12px' }} /></li>
                        <li>Power of Collective <FontAwesomeIcon  icon={faChevronDown} style={{ color: 'white', marginLeft:'49.5%', fontSize:'12px' }} /></li>
                        <li>Agency Building <FontAwesomeIcon  icon={faChevronDown} style={{ color: 'white', marginLeft:'56.5%', fontSize:'12px' }} /></li>
                        <li>Get Involved <FontAwesomeIcon  icon={faChevronDown} style={{ color: 'white', marginLeft:'65.3%', fontSize:'12px' }} /></li>
                    </ul>
                    <div className='contact-menu'>
                        <ul>
                            <li>sapnewaalis@gmail.com </li>
                            <li>+91 80910 93301</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hamburger;