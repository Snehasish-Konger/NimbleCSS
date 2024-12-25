import React from 'react';
import PropTypes from 'prop-types';
import '../components/_dropdown.scss'; // Importing component-specific styles

const DropdownMenu = ({ children, isOpen, ...props }) => {
    return (
        <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} {...props}>
            {children}
        </div>
    );
};

DropdownMenu.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default DropdownMenu;
