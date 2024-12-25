import React from 'react';
import PropTypes from 'prop-types';
import '../layout/_grid.scss'; // Importing layout-specific styles

const Col = ({ children, size, ...props }) => {
    return (
        <div className={`col-${size}`} {...props}>
            {children}
        </div>
    );
};

Col.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']).isRequired,
};

export default Col;
