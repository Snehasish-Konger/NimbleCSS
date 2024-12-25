import React from 'react';
import PropTypes from 'prop-types';
import '../components/_nav.scss'; // Importing SCSS for nav styles

const NavLink = ({ children, href, active, disabled, ...props }) => {
    return (
        <a
            className={`nav-link ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
            href={href}
            {...props}
        >
            {children}
        </a>
    );
};

NavLink.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default NavLink;
