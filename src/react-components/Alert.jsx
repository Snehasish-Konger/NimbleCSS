import React from 'react';
import PropTypes from 'prop-types';
import '../components/_alert.scss'; // Example of importing component-specific styles

const Alert = ({ children, type, ...props }) => {
    return (
        <div className={`alert alert-${type}`} {...props}>
            {children}
        </div>
    );
};

Alert.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']).isRequired,
};

export default Alert;
