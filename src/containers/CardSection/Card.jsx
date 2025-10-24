import arrowIcon from '../../../src/assets/images/svgs/yellow-arrow-forward.svg';
import blueArrow from '../../../src/assets/images/svgs/blue-right-arrow.svg';
import { CARD_CONTENT } from '../../constants/Constants';
import './Card.css';

const Card = () => {
    const { subtitle, title, description, buttons, stages, cards } = CARD_CONTENT;

    return (
        <>
            <div className="container">
                <div className="left-section">
                    <p className="subtitle">{subtitle}</p>
                    <h1 className="title">
                        {title.line1}
                        <br />
                        {title.line2}
                    </h1>
                    <p className="description">
                        {description.line1}
                        <br />
                        {description.line2}
                        <br />
                        {description.line3}
                    </p>
                    <div className="arrow-group">
                        {buttons.map((button) => (
                            <button
                                key={button.id}
                                className="link-button"
                                onClick={() => (window.location.href = button.link)}
                            >
                                {button.text}
                                <img className="arrow" src={arrowIcon} alt="" />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="right-section">
                    <div className="stages-header">
                        {stages.map((stage, index) => (
                            <span key={stage.id} className="stage-key">
                                <span className={`stage-label ${stage.active ? 'active' : ''}`}>
                                    {stage.label}
                                </span>
                                {index < stages.length - 1 && (
                                    <img className="arrow" src={blueArrow} alt="" />
                                )}
                            </span>
                        ))}
                    </div>

                    <div className="cards-wrapper">
                        <div className="cards-container">
                            {cards.map((card) => (
                                <div key={card.id} className="card">
                                    <div className="card-image">
                                        <img src={card.image} alt={card.alt} />
                                    </div>
                                    <div
                                        className="card-bg"
                                        style={{ backgroundColor: card.bgColor }}
                                    >
                                        <h3 className="card-title">{card.title}</h3>
                                        <p className="card-description">
                                            {Object.values(card.description).map((line, idx) => (
                                                <span key={idx}>
                                                    {line}
                                                    {idx <
                                                        Object.values(card.description).length -
                                                            1 && <br />}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
