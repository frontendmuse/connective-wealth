import { FINANCIAL_FREEDOM_DATA, NORTH_STAR_DATA } from '../../constants/Constants';
import northStarBg from '../../../src/assets/images/pngs/bg-image.png';
import advisorsGroup from '../../../src/assets/images/pngs/advisors-group.png';
import './FinancialFreedomSection.css';

const FinancialFreedomSection = () => {
    return (
        <>
            <div
                className="north-star-container"
                style={{ backgroundImage: `url(${northStarBg})` }}
            >
                <div className="north-star-content">
                    <h2 className="north-star-heading">{NORTH_STAR_DATA.heading}</h2>
                    <p className="north-star-description">{NORTH_STAR_DATA.description}</p>
                </div>
            </div>

            <div className="financial-freedom-image">
                <img src={advisorsGroup} alt="Adviser group" />
            </div>

            <div className="financial-freedom-content">
                <h2 className="financial-freedom-title">{FINANCIAL_FREEDOM_DATA.title}</h2>

                <div className="financial-freedom-text">
                    <p>{FINANCIAL_FREEDOM_DATA.paragraph1}</p>
                    <p>{FINANCIAL_FREEDOM_DATA.paragraph2}</p>
                </div>
            </div>
        </>
    );
};

export default FinancialFreedomSection;
