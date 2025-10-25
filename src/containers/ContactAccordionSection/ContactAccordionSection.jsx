import React, { useState } from 'react';
import './ContactAccordionSection.css';
import { CONTACT_FAQ_DATA } from '../../constants/Constants';
import plusIcon from '../../../src/assets/images/svgs/add-circle.svg';
import bluePlusIcon from '../../../src/assets/images/svgs/blue-plus-icon.svg';
import minusIcon from '../../../src/assets/images/svgs/blue-minus-icon.svg';

const MinusIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
    >
        <circle cx="12" cy="12" r="10" />
        <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
);

const ContactAccordionSection = () => {
    const [openSection, setOpenSection] = useState();
    const [openQuestions, setOpenQuestions] = useState({});

    const toggleSection = (sectionId) => {
        if (openSection === sectionId) {
            setOpenSection(null);
            setOpenQuestions({});
        } else {
            setOpenSection(sectionId);
            setOpenQuestions({});
        }
    };

    const toggleQuestion = (questionId) => {
        setOpenQuestions((prev) => ({
            ...prev,
            [questionId]: !prev[questionId],
        }));
    };

    return (
        <div className="contact-accordion-section">
            <div className="accordion-header">
                <h3 className="accordion-title">FREQUENTLY ASKED QUESTIONS</h3>
            </div>

            <div className="accordion-container">
                {CONTACT_FAQ_DATA.map((section) => (
                    <div key={section.id} className="contact-accordion-item">
                        <button
                            className={`contact-accordion-button ${
                                openSection === section.id ? 'active' : ''
                            }`}
                            onClick={() => toggleSection(section.id)}
                        >
                            <span className="accordion-button-text">{section.section}</span>
                            <span className="contact-accordion-icon">
                                {openSection === section.id ? (
                                    <img src={minusIcon} alt="toggle" />
                                ) : (
                                    <img src={bluePlusIcon} alt="toggle" />
                                )}
                            </span>
                        </button>

                        {openSection === section.id && (
                            <div className="accordion-content">
                                {section.questions.map((questionItem) => (
                                    <div key={questionItem.id} className="question-item">
                                        <button
                                            className={`question-button ${
                                                openQuestions[questionItem.id] ? 'active' : ''
                                            }`}
                                            onClick={() => toggleQuestion(questionItem.id)}
                                        >
                                            <span className="question-text">
                                                {questionItem.question}
                                            </span>
                                            <span className="question-icon">
                                                {openQuestions[questionItem.id] ? (
                                                    <MinusIcon />
                                                ) : (
                                                    <img src={plusIcon} alt="toggle" />
                                                )}
                                            </span>
                                        </button>

                                        {openQuestions[questionItem.id] && (
                                            <div className="answer-content">
                                                <p className="answer-text">{questionItem.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactAccordionSection;
