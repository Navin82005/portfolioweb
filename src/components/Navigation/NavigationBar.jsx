import React, { useEffect, useState, useRef } from 'react';
import logo from '../../assets/icon/letter-n.png';
import './NavigationBar.css';
import { Link, useLocation } from 'react-router-dom';
import Naveen from '../Naveen';

const NavigationBar = () => {
    const [isHamMenuActive, setIsHamMenuActive] = useState(false);
    const sectionsRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);

    const handleMenuToggle = () => {
        setIsHamMenuActive(!isHamMenuActive);
    };

    return (
        <nav className='z-50'>
            <div className="class-name">
                <Naveen className="font-bold" fontSize={"3xl"} NHeight={32} NWidth={32} />
            </div>
            <div className="links-div" ref={sectionsRef}>
                <ul className="links-div-ul">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Me</Link>
                    </li>
                    <li>
                        <Link to="/project">Works</Link>
                    </li>
                    <li>
                        <Link to="/services/freelancing">Freelancing</Link>
                    </li>
                    <li>
                        <Link to="/contact">Get in Touch</Link>
                    </li>
                </ul>
            </div>
            <div className="links-div-hamburger">
                <label className="hamburger" htmlFor="ham-checkbox">
                    <input type="checkbox" onClick={handleMenuToggle} id="ham-checkbox" />
                    <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                    <div className="menu-backdrop"></div>
                    <ul className={`links-hamburger-ul ${isHamMenuActive ? 'open' : ''}`}>
                        <li className="links-hamburger-ul-1">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Me</Link>
                        </li>
                        <li>
                            <Link to="/project">Works</Link>
                        </li>
                        <li>
                            <Link to="/services/freelancing">Freelancing</Link>
                        </li>
                        <li>
                            <Link to="/contact">Get in Touch</Link>
                        </li>
                    </ul>
                </label>
            </div>
            <div className="recruit-home-div">
                <a className="button" href="recruit">
                    Recruit Me
                    <span className="button__icon-wrapper">
                        <svg
                            width="10"
                            className="button__icon-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 15"
                        >
                            <path
                                fill="currentColor"
                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            ></path>
                        </svg>
                        <svg
                            className="button__icon-svg button__icon-svg--copy"
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            fill="none"
                            viewBox="0 0 14 15"
                        >
                            <path
                                fill="currentColor"
                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            ></path>
                        </svg>
                    </span>
                </a>
            </div>
        </nav>
    );
};

export default NavigationBar;
