import React from 'react';
import PropTypes from 'prop-types';
import '../components/_progress.scss'; // Importing SCSS for progress bar styles

const Progress = ({ children, ...props }) => {
    return (
        <div className="progress" {...props}>
            {children}
        </div>
    );
};

Progress.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Progress;
