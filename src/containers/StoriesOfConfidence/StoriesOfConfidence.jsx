import { useState } from 'react';
import chevron from '../../../src/assets/images/svgs/chevron-yellow-forward.svg';

import { stories } from '../../constants/Constants';
import './StoriesOfConfidence.css';

const StoriesOfConfidence = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const storiesPerPage = 3;
    const totalPages = Math.ceil(stories.length / storiesPerPage);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const goToPage = (index) => {
        setCurrentPage(index);
    };

    const startIndex = currentPage * storiesPerPage;
    const currentStories = stories.slice(startIndex, startIndex + storiesPerPage);

    return (
        <div className="stories-container">
            <div className="stories-left-section">
                <h1 className="main-title">Stories of Confidence and Care</h1>
                <div className="rating">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star-half">★</span>
                </div>
                <p className="stats">
                    15,000+ people coached to date with an average rating of 4.9
                </p>
            </div>

            <div className="stories-right-section">
                {currentStories.map((story, index) => (
                    <div key={startIndex + index} className="story-card">
                        <h2 className="story-title">{story.title}</h2>
                        <p className="story-text">{story.text}</p>
                        <p className="story-name">{story.name}</p>
                        <p className="story-role">{story.role}</p>
                    </div>
                ))}

                <div className="pagination">
                    {Array.from({ length: 5 }, (_, index) => (
                        <button
                            key={index}
                            className={`pagination-dot ${index === currentPage ? 'active' : ''} ${
                                index >= totalPages ? 'disabled' : ''
                            }`}
                            onClick={() => index < totalPages && goToPage(index)}
                            disabled={index >= totalPages}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button className="pagination-arrow" onClick={nextPage}>
                        <img src={chevron} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StoriesOfConfidence;
