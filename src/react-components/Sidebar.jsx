import React from 'react';
import PropTypes from 'prop-types';
import '../components/_sidebar.scss'; // Importing SCSS for sidebar styles

const Sidebar = ({ children, position, ...props }) => {
    return (
        <div className={`sidebar sidebar-${position}`} {...props}>
            {children}
        </div>
    );
};

Sidebar.propTypes = {
    children: PropTypes.node.isRequired,
    position: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default Sidebar;
