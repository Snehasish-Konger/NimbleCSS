import React from 'react';
import PropTypes from 'prop-types';
import '../components/_media.scss'; // Importing SCSS for media object styles

const MediaHeading = ({ children, ...props }) => {
    return (
        <h5 className="media-heading" {...props}>
            {children}
        </h5>
    );
};

MediaHeading.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MediaHeading;
