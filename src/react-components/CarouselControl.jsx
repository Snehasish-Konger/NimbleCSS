import React from 'react';
import PropTypes from 'prop-types';
import '../components/_carousel.scss'; // Importing component-specific styles

const CarouselControl = ({ direction, target, ...props }) => {
    return (
        <a 
            className={`carousel-control-${direction}`} 
            href={`#${target}`} 
            role="button" 
            data-slide={direction} 
            {...props}
        >
            <span className={`carousel-control-${direction}-icon`} aria-hidden="true"></span>
            <span className="sr-only">{direction === 'prev' ? 'Previous' : 'Next'}</span>
        </a>
    );
};

CarouselControl.propTypes = {
    direction: PropTypes.oneOf(['prev', 'next']).isRequired,
    target: PropTypes.string.isRequired,
};

export default CarouselControl;
