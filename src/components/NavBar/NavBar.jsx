import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import connectiveLogo from '../../../src/assets/images/svgs/connective-logo.svg';
import './NavBar.css';

const NavBar = ({
    showLogo = true,
    // showLogin = true,
    showHamburger = true,
    className = '',
    style = {},
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className={`navbar ${className}`} style={style}>
            <div className={`navbar-container ${className}`}>
                {showLogo && (
                    <div className="navbar-logo">
                        <Link to="/">
                            <img src={connectiveLogo} alt="Connective Logo" className="logo" />
                        </Link>
                    </div>
                )}

                <ul className={`navbar-menu ${className} ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link
                            to="/"
                            className={`nav-link ${isActive('/')}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/financial-coaching"
                            className={`nav-link ${isActive('/financial-coaching')}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Financial Coaching
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/wealth-management"
                            className={`nav-link ${isActive('/wealth-management')}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Wealth Management
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about-us"
                            className={`nav-link ${isActive('/about-us')}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/insights"
                            className={`nav-link ${isActive('/insights')}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Insights
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact-us"
                            className={`nav-link ${isActive('/contact-us')}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </li>
                    {/* {showLogin && (
                        <li className="mobile-login">
                            <button className="login-btn">Login</button>
                        </li>
                    )} */}
                </ul>

                <div className="navbar-actions">
                    {/* {showLogin && <button className="login-btn desktop-login">Login</button>} */}
                    {showHamburger && (
                        <button
                            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
