import React from 'react';
import FinancialGym from '../../containers/FinancialGym/FinancialGym';
import CoachingFeaturesGrid from '../../containers/CoachingFeaturesGrid/CoachingFeaturesGrid';
import TrainingGuide from '../../containers/TrainingGuide/TrainingGuide';
import CoachesSection from '../../containers/CoachesSection/CoachesSection';
import StoriesOfConfidence from '../../containers/StoriesOfConfidence/StoriesOfConfidence';
import { CTA_CONTENT } from '../../constants/Constants';
import CallToAction from '../../components/CallToAction/CallToAction';
import Rating from '../../components/Rating/Rating';

const FinancialCoaching = () => {
    return (
        <>
            <div>
                <FinancialGym />
                <Rating variant="highlight" />
                <CoachingFeaturesGrid />
                <TrainingGuide />
                <hr className="horizontal-line" />
                <CoachesSection />
                <StoriesOfConfidence />
                <div className="call-action-section">
                    <CallToAction
                        variant="consultation"
                        content={CTA_CONTENT.consultation}
                        //  onButtonClick={handleButtonClick}
                    />
                </div>
            </div>
        </>
    );
};

export default FinancialCoaching;
