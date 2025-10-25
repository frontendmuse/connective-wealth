import ContactAccordionSection from '../containers/ContactAccordionSection/ContactAccordionSection';
import ContactFormSection from '../containers/ContactFormSection/ContactFormSection';
import ContactMapSection from '../containers/ContactMapSection/ContactMapSection';
import ContactTestimonialSection from '../containers/ContactTestimonialSection/ContactTestimonialSection';

const ContactUs = () => {
    return (
        <div>
            <ContactFormSection />
            <hr className="horizontal-line" />
            <ContactAccordionSection />
            <ContactMapSection />
            <hr className="horizontal-line" />
            <ContactTestimonialSection />
        </div>
    );
};

export default ContactUs;
