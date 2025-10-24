import coachMeeting from '../../../src/assets/images/pngs/coach-meeting.png';
import './TrainingGuide.css';

const TrainingGuide = () => {
    return (
        <div className="caring-guide-container">
            <div className="content-section">
                <h1 className="title">
                    Your caring
                    <br />
                    guide for money.
                </h1>

                <p className="description">
                    At Connective, your coach is like a trusted trainer for your financial life,
                    helping you build habits that last and see real results. Together, we'll help
                    you pay off debt, grow savings, build stability, and feel confident making every
                    money decision. No judgment, no quick fixes, just steady, lasting progress.
                </p>

                <a href="#" className="know-more-link">
                    Know more <span className="arrow">→</span>
                </a>
            </div>

            <div className="image-section">
                <img
                    src={coachMeeting}
                    alt="Financial coach meeting with client"
                    className="coach-image"
                />
            </div>
        </div>
    );
};

export default TrainingGuide;
