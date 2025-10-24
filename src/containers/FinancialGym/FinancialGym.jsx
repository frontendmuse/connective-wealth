import Button from '../../components/Button/Button';
import { BUTTON_TEXTS } from '../../constants/Constants';
import phoneIcon from '../../../src/assets/images/svgs/call.svg';
import connectiveLogo from '../../../src/assets/images/svgs/connective-logo.svg';
import './FinancialGym.css';

const FinancialGym = () => {
    return (
        <div className="financial-gym-container">
            <div className="content-wrapper">
                <h1 className="main-heading">
                    Learn money habits
                    <br />
                    that change your life.
                </h1>

                <p className="description">
                    At Connective, our coaches meet you where you are and help you move forward with
                    confidence. Together, we'll build better habits, pay down debt, grow savings,
                    and create a plan that gives you clarity, control, and lasting peace of mind.
                </p>

                <button className="gym-cta-button">Get in touch with a coach</button>

                <div className="logo-section">
                    <h2 className="logo-text">FINANCIAL GYM</h2>
                    <p className="powered-by">
                        Powered by
                        <img src={connectiveLogo} alt="Connective Logo" className="logo" />
                    </p>
                </div>
            </div>

            <div className="schedule-btn">
                <Button
                    variant="tertiary"
                    icon={<img src={phoneIcon} alt="" />}
                    iconPosition="left"
                >
                    {BUTTON_TEXTS.scheduleCall}
                </Button>
            </div>
        </div>
    );
};

export default FinancialGym;
