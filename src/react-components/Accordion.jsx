import React from 'react';
import PropTypes from 'prop-types';
import '../layout/_grid.scss'; // Example of importing relevant layout files
import '../components/_accordion.scss'; // Example of importing component-specific styles

const Accordion = ({ children, ...props }) => {
    return (
        <div className="accordion" {...props}>
            {children}
        </div>
    );
};

Accordion.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Accordion;
