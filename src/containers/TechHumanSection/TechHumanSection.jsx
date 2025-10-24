import techHuman from '../../../src/assets/images/svgs/wealth-growth.svg';
import phoneIcon from '../../../src/assets/images/svgs/call.svg';
import Button from '../../components/Button/Button';
import { BUTTON_TEXTS } from '../../constants/Constants';
import './TechHumanSection.css';

const TechHumanSection = () => {
    return (
        <>
            <div className="tech-human-container">
                <img src={techHuman} alt="" className="tech-human-svg" />
                <div className="tech-human-content">
                    <h1 className="tech-human-title">Tech + Human: The Connective Difference</h1>
                    <p className="tech-human-desc">
                        Our proprietary technology, HumAIn, blends human insight with intelligent
                        automation to design, track, and adapt your wealth plan in real time. It
                        supports our advisors so they can focus on what matters most, understanding
                        your goals, guiding your progress, and helping your wealth grow with your
                        life, not apart from it.
                    </p>
                </div>

                <div className="tech-button">
                    <Button variant="filled-dark">{BUTTON_TEXTS.scheduleCall}</Button>

                    <Button
                        variant="tertiary"
                        icon={<img src={phoneIcon} alt="" />}
                        iconPosition="left"
                        className="btn-display"
                    >
                        {BUTTON_TEXTS.scheduleCall}
                    </Button>
                </div>
            </div>
        </>
    );
};

export default TechHumanSection;
