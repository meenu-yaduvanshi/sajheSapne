import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/HamburgerMenu.css';

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    // State to manage which accordion is expanded
    const [expandedAccordion, setExpandedAccordion] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleAccordionChange = (accordionName) => {
        setExpandedAccordion((prevAccordion) =>
            prevAccordion === accordionName ? null : accordionName
        );
    };

    const accordionItems = [
        { title: 'Crowdfunding', details: 'About crowd funding' },
        { title: 'Power of Learning', details: 'About Learning page' },
        { title: 'Power of Earning', details: 'About earning page' },
        { title: 'Power of Collective', details: 'About collective page' },
        { title: 'Agency Building', details: 'About agency building' },
        { title: 'Get Involved', details: ['Document', 'DonateNow', 'Deliver'], isLink: true },
    ];

    return (
        <div className="hamburger-menu">
            <button className="menu-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon style={{ color: '#2A3787' }} icon={isOpen ? faTimes : faBars} />
            </button>
            {isOpen && (
                <div className="menu">
                    {accordionItems.map((item, index) => (
                        <Accordion
                            key={index}
                            disableGutters
                            elevation={0}
                            expanded={expandedAccordion === item.title}
                            onChange={() => handleAccordionChange(item.title)}
                            sx={{
                                boxShadow: 'none',
                                '&:before': { display: 'none' },
                                backgroundColor: '#2A3787',
                                paddingTop: item.title === 'Crowdfunding' ? "4%" : '0',
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white', paddingRight: '70px' }} />}
                                aria-controls={`panel${index + 1}-content`}
                                id={`panel${index + 1}-header`}
                                sx={{
                                    backgroundColor: '#2A3787',
                                    color: expandedAccordion === item.title ? 'yellow' : 'white',
                                    fontFamily: 'Poppins',
                                    paddingLeft: '13%',
                                    boxShadow: 'none',
                                    borderBottom: 'none',
                                }}
                            >
                                {item.title}
                            </AccordionSummary>

                            <AccordionDetails
                                sx={{
                                    backgroundColor: '#2A3787',
                                    color: 'white',
                                    fontFamily: 'Poppins',
                                    paddingLeft: '13%',
                                    paddingRight: '10%',
                                    fontSize: '0.8em',
                                }}
                            >
                                {item.isLink ? (
                                    item.details.map((linkTitle, i) => (
                                        <Link key={i} to={`/${linkTitle.toLowerCase()}`}>
                                            <p className='get-involved-pages'>{linkTitle}</p>
                                        </Link>
                                    ))
                                ) : (
                                    <p style={{ color: 'white !important' }}>{item.details}</p>
    )}
                            </AccordionDetails>
                        </Accordion>
                    ))}

                    <div className='contact-menu'>
                        <ul>
                            <li>sapnewaalis@gmail.com</li>
                            <li>+91 80910 93301</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Hamburger;
