import React from 'react';
import PropTypes from 'prop-types';
import '../components/_carousel.scss'; // Importing component-specific styles

const CarouselItem = ({ children, active, ...props }) => {
    return (
        <div className={`carousel-item ${active ? 'active' : ''}`} {...props}>
            {children}
        </div>
    );
};

CarouselItem.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
};

export default CarouselItem;
