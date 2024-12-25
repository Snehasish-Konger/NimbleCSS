import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../components/_dropdown.scss'; // Importing component-specific styles

const Dropdown = ({ children, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={`dropdown ${isOpen ? 'show' : ''}`} {...props}>
            {React.Children.map(children, child => 
                React.cloneElement(child, { toggle, isOpen })
            )}
        </div>
    );
};

Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Dropdown;
