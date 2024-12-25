import React from 'react';
import PropTypes from 'prop-types';
import '../components/_badge.scss'; // Importing component-specific styles

const Badge = ({ children, type, ...props }) => {
    return (
        <span className={`badge badge-${type}`} {...props}>
            {children}
        </span>
    );
};

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']).isRequired,
};

export default Badge;
