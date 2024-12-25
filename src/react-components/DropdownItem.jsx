import React from 'react';
import PropTypes from 'prop-types';
import '../components/_dropdown.scss'; // Importing component-specific styles

const DropdownItem = ({ children, ...props }) => {
    return (
        <a className="dropdown-item" {...props}>
            {children}
        </a>
    );
};

DropdownItem.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DropdownItem;
