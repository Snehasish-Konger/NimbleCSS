import React from 'react';
import PropTypes from 'prop-types';
import '../components/_accordion.scss'; // Example of importing component-specific styles

const AccordionHeader = ({ children, ...props }) => {
    return (
        <div className="accordion-header" {...props}>
            {children}
        </div>
    );
};

AccordionHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AccordionHeader;
