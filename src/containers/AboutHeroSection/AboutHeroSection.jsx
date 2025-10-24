import { ABOUT_US_DATA, BUTTON_TEXTS } from '../../constants/Constants';
import phoneIcon from '../../../src/assets/images/svgs/call.svg';
import dollarBill from '../../../src/assets/images/pngs/money.png';
import './AboutHeroSection.css';
import Button from '../../components/Button/Button';

const AboutHeroSection = () => {
    return (
        <div className="hero-container">
            <section className="hero-top">
                <h1 className="hero-heading">{ABOUT_US_DATA.mainHeading}</h1>
                <p className="hero-subheading">{ABOUT_US_DATA.subHeading}</p>
                <Button variant="filled-dark">{BUTTON_TEXTS.scheduleCall}</Button>

                <div className="dollar-image-container">
                    <img src={dollarBill} alt="Dollar Bill" className="dollar-image" />
                </div>
            </section>

            <section className="hero-bottom">
                <div className="about-content-wrapper">
                    <div className="about-left"></div>

                    <div className="about-right">
                        <h2 className="mission-heading">
                            <span className="mission-pre">{ABOUT_US_DATA.mission.preText}</span>
                            <br />
                            <span className="mission-main">{ABOUT_US_DATA.mission.mainText}</span>
                        </h2>

                        <p className="mission-description">{ABOUT_US_DATA.mission.description}</p>

                        <div className="founders-container">
                            {ABOUT_US_DATA.founders.map((founder, index) => (
                                <div key={index} className="founder-info">
                                    <h3 className="founder-name">{founder.name}</h3>
                                    <p className="founder-description">{founder.description}</p>
                                </div>
                            ))}
                        </div>

                        <p className="closing-text">{ABOUT_US_DATA.closingText}</p>
                    </div>
                </div>

                <div className="schedule-btn">
                    <Button
                        variant="tertiary"
                        icon={<img src={phoneIcon} alt="" />}
                        iconPosition="left"
                        className="cta-button-float"
                    >
                        {BUTTON_TEXTS.scheduleCall}
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default AboutHeroSection;
