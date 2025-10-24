import { REVEAL_TEXT } from '../../constants/Constants';
import './TextReveal.css';

const TextReveal = () => {
    return (
        <div className="text-container">
            <div className="text-line">
                <h1 className="text-reveal">
                    {REVEAL_TEXT.prefix}{' '}
                    <span className="text-highlight">{REVEAL_TEXT.highlight}</span>{' '}
                    {REVEAL_TEXT.body}
                </h1>
                <h1 className="reveal">{REVEAL_TEXT.founder}</h1>
            </div>
        </div>
    );
};
export default TextReveal;
