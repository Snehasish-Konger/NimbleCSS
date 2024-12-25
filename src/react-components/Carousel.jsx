import React from 'react';
import PropTypes from 'prop-types';
import '../components/_carousel.scss'; // Importing component-specific styles

const Carousel = ({ children, ...props }) => {
    return (
        <div className="carousel slide" {...props}>
            {children}
        </div>
    );
};

Carousel.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Carousel;
