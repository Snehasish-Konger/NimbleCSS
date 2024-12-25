import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../components/_collapse.scss'; // Importing component-specific styles

const Collapse = ({ children, id, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <button 
                className="btn btn-primary" 
                type="button" 
                onClick={toggle} 
                aria-controls={id}
                aria-expanded={isOpen}
            >
                Toggle
            </button>
            <div 
                className={`collapse ${isOpen ? 'show' : ''}`} 
                id={id} 
                {...props}
            >
                {children}
            </div>
        </>
    );
};

Collapse.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
};

export default Collapse;
