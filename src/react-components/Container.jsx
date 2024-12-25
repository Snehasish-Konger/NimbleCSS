import React from 'react';
import PropTypes from 'prop-types';
import '../layout/_containers.scss'; // Importing layout-specific styles

const Container = ({ children, fluid, ...props }) => {
    return (
        <div className={`container${fluid ? '-fluid' : ''}`} {...props}>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
    fluid: PropTypes.bool,
};

export default Container;
