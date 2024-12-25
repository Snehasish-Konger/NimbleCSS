import React from 'react';
import PropTypes from 'prop-types';
import '../components/_popover.scss'; // Importing SCSS for popover styles

const PopoverHeader = ({ children, ...props }) => {
    return (
        <div className="popover-header" {...props}>
            {children}
        </div>
    );
};

PopoverHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PopoverHeader;
