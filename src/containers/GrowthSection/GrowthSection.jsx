import { useState } from 'react';
import Button from '../../components/Button/Button';
import peopleIcon from '../../../src/assets/images/svgs/people.svg';
import growthIcon from '../../../src/assets/images/svgs/growth.svg';
import arrowForward from '../../../src/assets/images/svgs/btn-arrow-right.svg';
import chevronLeft from '../../../src/assets/images/svgs/chevron-left.svg';
import chevronRight from '../../../src/assets/images/svgs/chevron-right.svg';
import { BUTTON_TEXTS, GROWTH_SECTION_DATA, TESTIMONIAL_DATA } from '../../constants/Constants';
import './GrowthSection.css';

const GrowthSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { coaching, advisory } = GROWTH_SECTION_DATA;

    const itemsPerView = 4;
    const maxIndex = TESTIMONIAL_DATA.testimonials.length - itemsPerView;

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
    };

    return (
        <>
            <div className="growth-section">
                <div className="growth-card coaching-card">
                    <div className="card-icon">
                        <img src={peopleIcon} alt="User" />
                    </div>
                    <div className="card-content">
                        <p className="card-category">{coaching.category}</p>
                        <h2 className="card-heading">{coaching.title}</h2>
                        <p className="card-desc">{coaching.description}</p>
                    </div>

                    <Button
                        variant="tertiary"
                        icon={<img src={arrowForward} alt="Arrow Icon" className="arrow-icon" />}
                        iconPosition="right"
                        className="card-cta"
                    >
                        {BUTTON_TEXTS.financialGym}
                    </Button>
                </div>

                <div className="growth-card advisory-card">
                    <div className="card-icon">
                        <img src={growthIcon} alt="Growth" />
                    </div>

                    <div className="card-content">
                        <p className="card-category">{advisory.category}</p>
                        <h2 className="card-heading">{advisory.title}</h2>
                        <p className="card-desc">{advisory.description}</p>
                    </div>

                    <Button
                        variant="tertiary"
                        icon={<img src={arrowForward} alt="Arrow Icon" className="arrow-icon" />}
                        iconPosition="right"
                        className="card-cta"
                    >
                        {BUTTON_TEXTS.expertiseDecision}
                    </Button>
                </div>
            </div>
            <section className="testimonial-section">
                <div className="testimonial-header">
                    <h2 className="testimonial-title">{TESTIMONIAL_DATA.title}</h2>
                    <p className="testimonial-subtitle">{TESTIMONIAL_DATA.subtitle}</p>
                </div>

                <div className="carousel-wrapper">
                    <div
                        className="carousel-track"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                        }}
                    >
                        {TESTIMONIAL_DATA.testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-item">
                                <div className="testimonial-card"></div>
                                <div className="testimonial-info">
                                    <div className="testimonial-name">{testimonial.name}</div>
                                    <div className="testimonial-role">{testimonial.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="carousel-button left"
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        aria-label="Previous testimonials"
                    >
                        <img src={chevronLeft} alt="" />
                    </button>

                    <button
                        className="carousel-button right"
                        onClick={handleNext}
                        disabled={currentIndex >= maxIndex}
                        aria-label="Next testimonials"
                    >
                        <img src={chevronRight} alt="" />
                    </button>
                </div>
            </section>{' '}
        </>
    );
};

export default GrowthSection;
