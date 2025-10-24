import { useState } from 'react';
import { FAQ_DATA } from '../../constants/Constants';
import { Accordion } from '../../components/Accordion/Accordion';

const FAQAccordion = ({ title = 'Frequently asked questions', faqs = FAQ_DATA }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h1 className="faq-title">{title}</h1>
            <div className="accordion">
                {faqs.map((faq, index) => (
                    <Accordion
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;
