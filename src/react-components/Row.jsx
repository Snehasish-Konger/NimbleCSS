import React from 'react';
import PropTypes from 'prop-types';
import '../layout/_grid.scss'; // Importing SCSS for grid styles

const Row = ({ children, className, ...props }) => {
    return (
        <div className={`row ${className || ''}`} {...props}>
            {children}
        </div>
    );
};

Row.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Row;
