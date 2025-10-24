import plusIcon from '../../../src/assets/images/svgs/add-circle.svg';
import './Accordion.css';

export const Accordion = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className="accordion-item">
            <button className="accordion-button" onClick={onToggle} aria-expanded={isOpen}>
                <span className="accordion-question">{question}</span>
                <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
                    <img src={plusIcon} alt="toggle" />
                </span>
            </button>
            {isOpen && (
                <div className="accordion-content">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};
