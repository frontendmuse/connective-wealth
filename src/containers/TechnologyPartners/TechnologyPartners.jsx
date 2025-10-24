import './TechnologyPartners.css';
import { technologyPartners } from '../../constants/Constants';

const TechnologyPartners = () => {
    return (
        <div className="technology-partners">
            <div className="partners-container">
                <h1 className="partners-title">Our Technology Partners</h1>
                <p className="partners-subtitle">
                    Behind every plan is a tech stack built for clarity and confidence.
                </p>
                <p className="partners-subtitle">
                    By combining leading platforms with Connective's own tools, we give you the best
                    of innovation and insight.
                </p>

                <div className="partners-grid">
                    {technologyPartners.map((partner) => (
                        <div key={partner.id} className="partner-card">
                            <div className="icon-container">
                                <img src={partner.icon} alt={partner.name} />
                            </div>
                            <div className="partner-text-wrapper">
                                <h3 className="partner-name">{partner.name}</h3>
                                <p className="partner-description">{partner.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechnologyPartners;
