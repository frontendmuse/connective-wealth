import Navbar from '../NavBar/NavBar';
import blueArrow from '../../../src/assets/images/svgs/email-arrow-blue.svg';
import linkedIn from '../../../src/assets/images/svgs/linkedIn.svg';
import facebook from '../../../src/assets/images/svgs/facebook.svg';
import instagram from '../../../src/assets/images/svgs/instagram.svg';
import callFooter from '../../../src/assets/images/svgs/call-footer.svg';
import call from '../../../src/assets/images/svgs/call-footer.svg';
import mailFooter from '../../../src/assets/images/svgs/mail-footer.svg';
import phoneIcon from '../../../src/assets/images/svgs/call-yellow.svg';
import mailIcon from '../../../src/assets/images/svgs/mail-yellow.svg';

import './Footer.css';
import {
    CONTACT_INFO,
    LEGAL_LINKS,
    SOCIAL_LINKS_CONFIG,
    FOOTER_TEXT,
} from '../../constants/Constants';

const Footer = () => {
    const iconMap = {
        facebook,
        linkedIn,
        instagram,
        callFooter,
        mailFooter,
        call,
    };

    const socialLinks = SOCIAL_LINKS_CONFIG.map((link) => ({
        ...link,
        icon: iconMap[link.iconName],
    }));

    return (
        <footer className="footer">
            <Navbar
                showLogo={false}
                showLogin={false}
                showHamburger={false}
                className="footer-navbar navbar-menu-footer"
            />
            <hr className="horizontal" />

            <div className="footer__middle">
                <div className="footer__newsletter">
                    <p className="footer__newsletter-label">{FOOTER_TEXT.newsletter.label}</p>
                    <div className="footer__newsletter-form">
                        <input
                            type="email"
                            placeholder={FOOTER_TEXT.newsletter.placeholder}
                            className="footer__newsletter-input"
                        />
                        <img src={blueArrow} alt={FOOTER_TEXT.newsletter.submitAlt} />
                    </div>
                </div>
                <div className="footer__social">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="footer__social-link"
                            aria-label={link.ariaLabel}
                        >
                            <img src={link.icon} alt={link.ariaLabel} width="20" height="20" />
                        </a>
                    ))}
                </div>
            </div>

            <div className="footer__bottom">
                <div className="footer__contact">
                    <h4 className="footer__contact-title">{FOOTER_TEXT.contact.title}</h4>
                    <div className="footer__contact-info">
                        <a href={`tel:${CONTACT_INFO.phone}`} className="footer__contact-item">
                            <img src={phoneIcon} alt="" width="16" height="16" />
                            {CONTACT_INFO.phone}
                        </a>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="footer__contact-item">
                            <img src={mailIcon} alt="" width="16" height="16" />
                            {CONTACT_INFO.email}
                        </a>
                        <span className="footer__contact-item">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            {CONTACT_INFO.address}
                        </span>
                    </div>
                </div>

                <div className="footer__legal">
                    <h4 className="footer__legal-title">{FOOTER_TEXT.legal.title}</h4>
                    <div className="footer__legal-links">
                        {LEGAL_LINKS.map((link, index) => (
                            <a key={index} href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <hr className="horizontal-line" />

                <div className="footer__disclaimer">
                    <p>{FOOTER_TEXT.disclaimer.paragraph1}</p>
                    <p>{FOOTER_TEXT.disclaimer.paragraph2}</p>
                    <p>{FOOTER_TEXT.disclaimer.paragraph3}</p>
                    <p>{FOOTER_TEXT.disclaimer.paragraph4}</p>
                    <p>{FOOTER_TEXT.disclaimer.paragraph5}</p>
                    <p className="footer__copyright">
                        {FOOTER_TEXT.disclaimer.copyright.replace(
                            '{year}',
                            new Date().getFullYear(),
                        )}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
