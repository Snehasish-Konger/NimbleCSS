import React from 'react';
import PropTypes from 'prop-types';
import '../components/_avatar.scss'; // Importing component-specific styles

const Avatar = ({ src, alt, size, ...props }) => {
    return (
        <img 
            src={src} 
            alt={alt} 
            className={`avatar avatar-${size}`} 
            {...props} 
        />
    );
};

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
};

export default Avatar;
