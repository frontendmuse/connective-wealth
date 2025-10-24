import CallToAction from '../../components/CallToAction/CallToAction';
import { CTA_CONTENT } from '../../constants/Constants';
import AboutHeroSection from '../../containers/AboutHeroSection/AboutHeroSection';
import FinancialFreedomSection from '../../containers/FinancialFreedomSection/FinancialFreedomSection';
import LeadershipTeamSection from '../../containers/LeadershipTeamSection/LeadershipTeamSection';
import TechPoweredSection from '../../containers/TechPoweredSection/TechPoweredSection';

const AboutUs = () => {
    return (
        <div>
            <AboutHeroSection />
            <TechPoweredSection />
            <LeadershipTeamSection />
            <FinancialFreedomSection />
            <div className="call-action-section">
                <CallToAction
                    variant="form"
                    content={CTA_CONTENT.form}
                    // onSubmit={handleFormSubmit}
                />
            </div>
        </div>
    );
};

export default AboutUs;
