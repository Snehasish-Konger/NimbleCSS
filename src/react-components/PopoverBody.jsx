import React from 'react';
import PropTypes from 'prop-types';
import '../components/_popover.scss'; // Importing SCSS for popover styles

const PopoverBody = ({ children, ...props }) => {
    return (
        <div className="popover-body" {...props}>
            {children}
        </div>
    );
};

PopoverBody.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PopoverBody;
