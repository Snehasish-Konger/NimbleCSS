import React from 'react';
import PropTypes from 'prop-types';
import '../components/_media.scss'; // Importing SCSS for media object styles

const MediaBody = ({ children, ...props }) => {
    return (
        <div className="media-body" {...props}>
            {children}
        </div>
    );
};

MediaBody.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MediaBody;
