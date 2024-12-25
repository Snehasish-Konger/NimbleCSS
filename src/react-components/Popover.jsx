import React from 'react';
import PropTypes from 'prop-types';
import '../components/_popover.scss'; // Importing SCSS for popover styles

const Popover = ({ children, position, ...props }) => {
    return (
        <div className={`popover bs-popover-${position}`} {...props}>
            {children}
        </div>
    );
};

Popover.propTypes = {
    children: PropTypes.node.isRequired,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
};

export default Popover;
