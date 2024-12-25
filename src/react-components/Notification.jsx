import React from 'react';
import PropTypes from 'prop-types';
import '../components/_notification.scss'; // Importing SCSS for notification styles

const Notification = ({ children, type, ...props }) => {
    return (
        <div className={`notification notification-${type}`} {...props}>
            {children}
        </div>
    );
};

Notification.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']).isRequired,
};

export default Notification;
