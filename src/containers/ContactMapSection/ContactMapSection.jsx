import React from 'react';
import './ContactMapSection.css';
import { CONTACT_INFO_DATA } from '../../constants/Constants';
import phoneIcon from '../../../src/assets/images/svgs/contact-call.svg';
import locationIcon from '../../../src/assets/images/svgs/pin-drop.svg';
import emailIcon from '../../../src/assets/images/svgs/contact-mail.svg';
import mapImage from '../../../src/assets/images/pngs/map-image.png';

const ContactMapSection = () => {
    return (
        <div>
            <div className="map-container">
                <img src={mapImage} alt="Location Map" className="map-image" />{' '}
            </div>

            <div className="contact-info">
                <div className="contact-item">
                    <div className="icon-wrapper phone-icon">
                        <img src={phoneIcon} alt="Phone" />
                    </div>
                    <span className="contact-text">{CONTACT_INFO_DATA.phone}</span>
                </div>

                <div className="contact-item">
                    <div className="icon-wrapper location-icon">
                        <img src={locationIcon} alt="Location" />
                    </div>
                    <span className="contact-text">{CONTACT_INFO_DATA.address}</span>
                </div>

                <div className="contact-item">
                    <div className="icon-wrapper email-icon">
                        <img src={emailIcon} alt="Email" />
                    </div>
                    <span className="contact-text">{CONTACT_INFO_DATA.email}</span>
                </div>
            </div>
        </div>
    );
};

export default ContactMapSection;
