import React from 'react';
import PropTypes from 'prop-types';
import '../components/_accordion.scss'; // Example of importing component-specific styles

const AccordionBody = ({ children, ...props }) => {
    return (
        <div className="accordion-body" {...props}>
            {children}
        </div>
    );
};

AccordionBody.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AccordionBody;
