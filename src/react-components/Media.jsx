import React from 'react';
import PropTypes from 'prop-types';
import '../components/_media.scss'; // Importing SCSS for media object styles

const Media = ({ children, className, ...props }) => {
    return (
        <div className={`media ${className || ''}`} {...props}>
            {children}
        </div>
    );
};

Media.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Media;
