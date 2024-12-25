import React from 'react';
import PropTypes from 'prop-types';
import '../components/_accordion.scss'; // Example of importing component-specific styles

const AccordionItem = ({ children, ...props }) => {
    return (
        <div className="accordion-item" {...props}>
            {children}
        </div>
    );
};

AccordionItem.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AccordionItem;
