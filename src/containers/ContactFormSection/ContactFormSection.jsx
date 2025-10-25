import './ContactFormSection.css';
import consultationImage from '../../../src/assets/images/pngs/business-people.png';
import { CONTACT_FORM_DATA } from '../../constants/Constants';

const ContactFormSection = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-image">
                    <img src={consultationImage} alt="Financial consultation" />
                </div>

                <div className="contact-content">
                    <h2 className="contact-title">{CONTACT_FORM_DATA.title}</h2>
                    <p className="contact-description">{CONTACT_FORM_DATA.description}</p>

                    <form className="contact-form">
                        <div className="form-row">
                            <input
                                type="text"
                                placeholder={CONTACT_FORM_DATA.fields.fullName}
                                className="form-input"
                            />
                        </div>

                        <div className="form-row form-row-split">
                            <input
                                type="tel"
                                placeholder={CONTACT_FORM_DATA.fields.phoneNumber}
                                className="form-input"
                            />
                            <input
                                type="email"
                                placeholder={CONTACT_FORM_DATA.fields.emailId}
                                className="form-input"
                            />
                        </div>

                        <div className="form-row form-row-split">
                            <input
                                type="text"
                                placeholder={CONTACT_FORM_DATA.fields.preferredTime}
                                className="form-input"
                            />
                            <input
                                type="text"
                                placeholder={CONTACT_FORM_DATA.fields.preferredDay}
                                className="form-input"
                            />
                        </div>

                        <div className="form-row">
                            <textarea
                                placeholder={CONTACT_FORM_DATA.fields.yourMessage}
                                className="form-input form-textarea"
                                rows="4"
                            />
                        </div>

                        {/*Need to change this button - Use Reusable Button component */}
                        <button type="submit" className="submit-button">
                            {CONTACT_FORM_DATA.buttonText}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
