import { TEAM_COACHES_DATA, TEAM_DATA } from '../../constants/Constants';
import './LeadershipTeamSection.css';

const LeadershipTeamSection = () => {
    return (
        <>
            <div className="leadership-container">
                <div className="leadership-header">
                    <h1 className="leadership-heading">{TEAM_DATA.heading}</h1>
                    <p className="leadership-subheading">{TEAM_DATA.subheading}</p>
                </div>

                <div className="team-grid">
                    {TEAM_DATA.members.map((member) => (
                        <div key={member.id} className="team-card">
                            <div className="team-image-wrapper">
                                <img src={member.image} alt={member.name} className="team-image" />
                            </div>
                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-position">{member.position}</p>
                                <p className="team-description">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="team-coaches-section">
                <div className="team-coaches-container">
                    <h2 className="team-coaches-title">Coaches who make it real</h2>
                    <p className="team-coaches-description">
                        Our coaches are at the heart of Connective. They don't just give advice,
                        they guide, motivate, and walk with you step by step. From debt management
                        to wealth-building, they bring both expertise and empathy to every session.
                    </p>

                    <div className="team-coaches-grid">
                        {TEAM_COACHES_DATA.map((coach, index) => (
                            <div key={index} className="team-coach-card">
                                <div className="team-coach-image-wrapper">
                                    <img
                                        src={coach.image}
                                        alt={coach.name}
                                        className="team-coach-image"
                                    />
                                </div>
                                <h3 className="team-coach-name">{coach.name}</h3>
                                <p className="team-coach-position">{coach.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default LeadershipTeamSection;
