import React from 'react';
import PropTypes from 'prop-types';
import '../components/_carousel.scss'; // Importing component-specific styles

const CarouselIndicators = ({ slides, target }) => {
    return (
        <ol className="carousel-indicators">
            {slides.map((slide, index) => (
                <li 
                    key={index} 
                    data-target={`#${target}`} 
                    data-slide-to={index} 
                    className={index === 0 ? 'active' : ''}>
                </li>
            ))}
        </ol>
    );
};

CarouselIndicators.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object).isRequired,
    target: PropTypes.string.isRequired,
};

export default CarouselIndicators;
