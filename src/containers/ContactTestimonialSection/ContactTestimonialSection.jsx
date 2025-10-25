import './ContactTestimonialSection.css';
import { contactTestimonialData } from '../../constants/Constants';

const ContactTestimonialSection = () => {
    return (
        <div className="contact-testimonial-section">
            <div className="contact-trust-badge">
                <div className="star-rating">
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="star filled">
                            ★
                        </span>
                    ))}
                    <span className="star half">☆</span>
                </div>
                <span className="contact-trust-text">Trusted by over 15,000+ people</span>
            </div>

            <div className="contact-testimonial-cards">
                {contactTestimonialData.testimonials.map((testimonial, index) => (
                    <div key={index} className="contact-testimonial-card">
                        <p className="contact-testimonial-text">{testimonial.text}</p>
                        <p className="contact-testimonial-author">{testimonial.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactTestimonialSection;
