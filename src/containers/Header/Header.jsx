import connectiveHeader from '../../../src/assets/images/svgs/connective.svg';
import { HEADER_DESCRIPTION, HEADER_TITLE } from '../../constants/Constants';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header-content">
                    <h1>{HEADER_TITLE}</h1>
                    <p>{HEADER_DESCRIPTION}</p>
                </div>
                <div className="image-container">
                    <img src={connectiveHeader} alt="Connective Header" className="header-image" />
                </div>
            </div>
        </>
    );
};

export default Header;
