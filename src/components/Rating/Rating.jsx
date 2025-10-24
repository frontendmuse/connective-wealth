import { DEFAULT_RATING_DATA, HIGHLIGHT_RATING_DATA } from '../../constants/Constants';
import './Rating.css';

const Rating = ({ variant = 'default' }) => {
    const ratingData = variant === 'highlight' ? HIGHLIGHT_RATING_DATA : DEFAULT_RATING_DATA;

    return (
        <div className={`stats-bar ${variant}`}>
            {ratingData.map((stat, index) => (
                <div key={index} className="stat-item">
                    <div className="stat-icon">
                        <img src={stat.icon} alt={stat.label} />
                    </div>
                    <div className="stat-content">
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Rating;
