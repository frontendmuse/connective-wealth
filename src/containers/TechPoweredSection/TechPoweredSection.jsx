import { TECH_POWERED_DATA } from '../../constants/Constants';
import './TechPoweredSection.css';

const TechPoweredSection = () => {
    return (
        <div className="tech-powered-container">
            <div className="tech-wrapper">
                <h1 className="tech-main-heading">{TECH_POWERED_DATA.mainHeading}</h1>
                <p className="sub-heading">{TECH_POWERED_DATA.subHeading}</p>

                <div className="pillars-container">
                    {TECH_POWERED_DATA.pillars.map((pillar) => (
                        <div key={pillar.id} className="pillar-card">
                            <div className="icon-wrapper">
                                <img src={pillar.icon} alt={pillar.title} className="pillar-icon" />
                            </div>
                            <div className="divider"></div>
                            <h3 className="pillar-title">{pillar.title}</h3>
                            <p className="pillar-description">{pillar.description}</p>
                        </div>
                    ))}
                </div>

                <p className="footer-text">{TECH_POWERED_DATA.footerText}</p>
            </div>
        </div>
    );
};

export default TechPoweredSection;
