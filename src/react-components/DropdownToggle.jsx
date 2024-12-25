import React from 'react';
import PropTypes from 'prop-types';
import '../components/_dropdown.scss'; // Importing component-specific styles

const DropdownToggle = ({ children, toggle, ...props }) => {
    return (
        <button 
            className="btn dropdown-toggle" 
            onClick={toggle} 
            aria-expanded={props.isOpen} 
            {...props}
        >
            {children}
        </button>
    );
};

DropdownToggle.propTypes = {
    children: PropTypes.node.isRequired,
    toggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default DropdownToggle;
