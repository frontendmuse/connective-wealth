import CallToAction from '../../components/CallToAction/CallToAction';
import Rating from '../../components/Rating/Rating';
import { CTA_CONTENT, quotes2 } from '../../constants/Constants';
import PrinciplesSection from '../../containers/PrinciplesSection/PrinciplesSection';
import TechHumanSection from '../../containers/TechHumanSection/TechHumanSection';
import TechnologyPartners from '../../containers/TechnologyPartners/TechnologyPartners';

const WealthManagement = () => {
    return (
        <>
            <div>
                <TechHumanSection />
                <Rating variant="default" />
                <PrinciplesSection />
                <div className="quotes-section">
                    <div className="scroll-wrapper">
                        <div className="scroll-track">
                            {quotes2.map((quote, index) => (
                                <div key={index} className="quote-card">
                                    <div className="quote-text">{quote.text}</div>
                                    <div className="quote-text">{quote.description}</div>
                                    <div className="quote-text">{quote.content}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <TechnologyPartners />
                <div className="call-action-section">
                    <CallToAction
                        variant="form"
                        content={CTA_CONTENT.form}
                        // onSubmit={handleFormSubmit}
                    />
                </div>
            </div>
        </>
    );
};

export default WealthManagement;
