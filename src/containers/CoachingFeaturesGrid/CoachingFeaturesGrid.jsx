import { features } from '../../constants/Constants';
import './CoachingFeaturesGrid.css';

const CoachingFeaturesGrid = () => {
    return (
        <div className="coaching-features-grid">
            {features.map((feature, index) => (
                <div key={index} className="coaching-feature-item">
                    <div className="coaching-feature-icon">
                        <img src={feature.icon} alt={feature.title} />
                    </div>
                    <div className="coaching-text-content">
                        <h3 className="coaching-feature-heading">{feature.title}</h3>
                        <p className="coaching-feature-text">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CoachingFeaturesGrid;
