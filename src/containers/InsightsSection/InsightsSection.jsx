import { INSIGHTS_DATA } from '../../constants/Constants';
import yellowIcon from '../../../src/assets/images/svgs/yellow-arrow-forward.svg';
import './InsightsSection.css';

const InsightsSection = () => {
    return (
        <section className="insights-section">
            <div className="insights-container">
                <div className="insights-header">
                    <div className="insights-header-content">
                        <span className="section-label">{INSIGHTS_DATA.sectionTitle}</span>
                        <h2 className="main-heading">{INSIGHTS_DATA.mainHeading}</h2>
                        <p className="insights-description">{INSIGHTS_DATA.description}</p>
                    </div>
                    <a href="#" className="read-more-link">
                        {INSIGHTS_DATA.readMoreText}{' '}
                        <img src={yellowIcon} alt="arrow" className="arrow-icon" />
                    </a>
                </div>

                <div className="cards-grid">
                    {INSIGHTS_DATA.cards.map((card) => (
                        <div key={card.id} className="card-insights">
                            <div className="card-insights-image">
                                <img src={card.image} alt={card.title} />
                            </div>
                            <div className="card-insights-content">
                                <span className="card-insights-category">{card.category}</span>
                                <h3 className="card-insights-title">{card.title}</h3>
                                <p className="card-insights-author">{card.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InsightsSection;
