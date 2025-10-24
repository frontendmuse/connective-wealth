import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import footerLogo from '../../../src/assets/images/svgs/footer-logo.svg';
import c from '../../../src/assets/images/svgs/c.svg';
import o from '../../../src/assets/images/svgs/0.svg';
import n from '../../../src/assets/images/svgs/n.svg';
import e from '../../../src/assets/images/svgs/e.svg';
import t from '../../../src/assets/images/svgs/t.svg';
import i from '../../../src/assets/images/svgs/i.svg';
import v from '../../../src/assets/images/svgs/v.svg';

import './FooterSection.css';

const FooterSection = () => {
    return (
        <>
            <div className="images-group">
                <img src={c} alt="" />
                <img src={o} alt="" />
                <img src={n} alt="" />
                <img src={n} alt="" />
                <img src={e} alt="" />
                <img src={c} alt="" />
                <img src={t} alt="" />
                <img src={i} alt="" />
                <img src={v} alt="" />
                <img src={e} alt="" />
            </div>

            <div className="footer-container">
                <div className="footer-btn">
                    <img src={footerLogo} alt="" />
                    {/* <Button variant="primary">Login</Button> */}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default FooterSection;
