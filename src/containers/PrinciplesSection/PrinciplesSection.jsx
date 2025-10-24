import { useState } from 'react';
import chevronDown from '../../../src/assets/images/svgs/chevron-blue-down.svg';
import advisorsGroup from '../../../src/assets/images/pngs/advisors-group.png';
import { ourPrinciples, services } from '../../constants/Constants';
import './PrinciplesSection.css';

const PrinciplesSection = () => {
    const [expandedId, setExpandedId] = useState('');

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <>
            <div className="principles-container">
                <h2 className="principles-heading">OUR PRINCIPLES</h2>
                <div className="principles-grid">
                    {ourPrinciples.map((principle, index) => (
                        <div key={index} className="principle-card">
                            <img src={principle.icon} alt={principle.title} />
                            <h3 className="principle-title">{principle.title}</h3>
                            <p className="principle-description">{principle.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <img src={advisorsGroup} alt="Adviser group" className="advisor-group-img" />

            <div className="advisors-container">
                <div className="advisors-content">
                    <div className="advisors-header">
                        <h1 className="advisors-title">
                            Advisors Who Care
                            <br />
                            Beyond the Numbers
                        </h1>
                    </div>

                    <div className="advisors-main">
                        <div className="advisors-description">
                            <p>
                                Our wealth experts aren't just portfolio managers. They're
                                experienced advisors who combine deep investment knowledge with
                                empathy and care. Every plan is guided by your goals and backed by
                                smart AI insights, so strategies stay clear, adaptive, and aligned
                                with your life. With Connective, investments become a tool to
                                support your wellbeing, your freedom, and your future.
                            </p>
                        </div>

                        <div className="services-list">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className={`service-item ${
                                        expandedId === service.id ? 'expanded' : ''
                                    }`}
                                >
                                    <div
                                        className="service-header"
                                        onClick={() => toggleExpand(service.id)}
                                    >
                                        <div className="service-icon-wrapper">
                                            <img
                                                src={service.icon}
                                                alt={service.title}
                                                className="service-icon"
                                                style={{ color: service.color }}
                                            />
                                        </div>
                                        <span className="service-title">{service.title}</span>
                                        <img src={chevronDown} alt="Chevron" />
                                    </div>
                                    {expandedId === service.id && service.description && (
                                        <div className="service-description">
                                            <p>{service.description}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrinciplesSection;
