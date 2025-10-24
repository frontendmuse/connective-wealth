import { COACHES_DATA } from '../../constants/Constants';
import linkedIn from '../../../src/assets/images/svgs/coach-linkedIn.svg';
import './CoachesSection.css';

const CoachesSection = () => {
    return (
        <div className="coaches-section">
            <div className="coaches-header">
                <h1 className="coaches-title">{COACHES_DATA.title}</h1>
                <p className="coaches-subtitle">{COACHES_DATA.subtitle}</p>
            </div>

            <div className="coaches-container">
                <div className="coaches-scroll">
                    {COACHES_DATA.coaches.map((coach) => (
                        <div key={coach.id} className="coach-card">
                            <div className="coach-image-wrapper">
                                <img src={coach.image} alt={coach.name} className="coach-image" />
                            </div>
                            <div className="coach-content">
                                <h3 className="coach-label">Debt Reset Specialist</h3>
                                <h2 className="coach-name">{coach.name}</h2>
                                <p className="coach-role">{coach.role}</p>
                                <p className="coach-description">{coach.description}</p>
                                <div className="coach-company">
                                    <img
                                        src={linkedIn}
                                        alt="LinkedIn Icon"
                                        className="linked-icon"
                                    />

                                    <span className="company-name">/{coach.company}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoachesSection;
