import Button from '../../components/Button/Button';
import Rating from '../../components/Rating/Rating';
import Header from '../../containers/Header/Header';
import Card from '../../containers/CardSection/Card';
import phoneIcon from '../../../src/assets/images/svgs/call.svg';
import { BUTTON_TEXTS, CTA_CONTENT } from '../../constants/Constants';
import TextReveal from '../../components/TextReveal/TextReveal';
import GrowthSection from '../../containers/GrowthSection/GrowthSection';
import FAQAccordion from '../../containers/FAQAccordion/FAQAccordion';
import InsightsSection from '../../containers/InsightsSection/InsightsSection.jsx';
import FeaturedSection from '../../containers/FeaturedSection/FeaturedSection.jsx';
import CallToAction from '../../components/CallToAction/CallToAction.jsx';
import './HomePage.css';

const HomePage = () => {
    const handleFormSubmit = (data) => {
        console.log('Form submitted:', data);
    };

    return (
        <>
            <div className="main-container">
                <Header />

                <div className="button-container">
                    <div className="button-group">
                        <Button variant="filled-dark">{BUTTON_TEXTS.startJourney}</Button>
                        <Button variant="outlined">{BUTTON_TEXTS.scheduleCall}</Button>
                    </div>
                    <div>
                        <Button
                            variant="tertiary"
                            icon={<img src={phoneIcon} alt="" />}
                            iconPosition="left"
                        >
                            {BUTTON_TEXTS.scheduleCall}
                        </Button>
                    </div>
                </div>
                <Rating variant="default" />
                <hr className="horizontal-line" />
                <Card />

                <TextReveal />

                <GrowthSection />

                <FeaturedSection />

                <InsightsSection />

                <hr className="horizontal-line" />

                <FAQAccordion />
                <div className="call-action-section">
                    <CallToAction
                        variant="form"
                        content={CTA_CONTENT.form}
                        onSubmit={handleFormSubmit}
                    />
                </div>
            </div>
        </>
    );
};

export default HomePage;
