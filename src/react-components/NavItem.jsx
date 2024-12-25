import React from 'react';
import PropTypes from 'prop-types';
import '../components/_nav.scss'; // Importing SCSS for nav styles

const NavItem = ({ children, ...props }) => {
    return (
        <li className="nav-item" {...props}>
            {children}
        </li>
    );
};

NavItem.propTypes = {
    children: PropTypes.node.isRequired,
};

export default NavItem;
