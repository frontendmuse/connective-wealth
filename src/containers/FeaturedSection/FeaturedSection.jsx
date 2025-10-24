import patchLogo from '../../../src/assets/images/svgs/patch-logo.svg';
import houstonChronicleLogo from '../../../src/assets/images/svgs/houston-logo.svg';
import newHavenRegisterLogo from '../../../src/assets/images/svgs/new-haven-logo.svg';
import theChattanoogan from '../../../src/assets/images/svgs/the-day-logo.svg';
import onlyInYourStateLogo from '../../../src/assets/images/svgs/your-state-logo.svg';
import cbsLogo from '../../../src/assets/images/svgs/ct-logo.svg';
import spanishLogo from '../../../src/assets/images/svgs/i95-logo.svg';
import ctpostLogo from '../../../src/assets/images/svgs/ctpost-logo.svg';
import { FEATURED_ON_TEXT, quotes } from '../../constants/Constants';
import './FeaturedSection.css';

const FeaturedSection = () => {
    const logos = [
        { src: patchLogo, alt: 'Patch' },
        { src: houstonChronicleLogo, alt: 'Houston Chronicle' },
        { src: newHavenRegisterLogo, alt: 'New Haven Register' },
        { src: theChattanoogan, alt: 'The Chattanoogan' },
        { src: onlyInYourStateLogo, alt: 'Only In Your State' },
        { src: cbsLogo, alt: 'CBS' },
        { src: houstonChronicleLogo, alt: 'Houston Chronicle' },
        { src: spanishLogo, alt: 'Spanish' },
        { src: ctpostLogo, alt: 'CT Post' },
    ];

    return (
        <>
            <div className="featured-on-container">
                <h2 className="featured-on-title">{FEATURED_ON_TEXT}</h2>
                <div className="featured-on-logos">
                    {logos.map((logo, index) => (
                        <img key={index} src={logo.src} alt={logo.alt} className="featured-logo" />
                    ))}
                </div>
            </div>

            <hr className="horizontal-line" />

            <div className="trust-badge">
                <div className="star-rating">
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="star filled">
                            ★
                        </span>
                    ))}
                    <span className="star half">☆</span>
                </div>
                <span className="trust-text">Trusted by over 15,000+ people</span>
            </div>

            <div className="quotes-section">
                <div className="scroll-wrapper">
                    <div className="scroll-track">
                        {quotes.map((quote, index) => (
                            <div key={index} className="quote-card">
                                <div className="quote-text">{quote.text}</div>
                                <div className="quote-text">{quote.description}</div>
                                <div className="quote-text">{quote.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeaturedSection;
