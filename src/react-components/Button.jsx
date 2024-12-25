import React from 'react';
import PropTypes from 'prop-types';
import '../components/_button.scss'; // Importing component-specific styles

const Button = ({ children, type, onClick, ...props }) => {
    return (
        <button 
            className={`btn btn-${type}`} 
            onClick={onClick} 
            {...props}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']).isRequired,
    onClick: PropTypes.func,
};

export default Button;
