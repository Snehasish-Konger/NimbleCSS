import React from 'react';
import PropTypes from 'prop-types';
import '../components/_carousel.scss'; // Importing component-specific styles

const CarouselCaption = ({ children, ...props }) => {
    return (
        <div className="carousel-caption d-none d-md-block" {...props}>
            {children}
        </div>
    );
};

CarouselCaption.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CarouselCaption;
