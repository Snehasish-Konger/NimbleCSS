import React from 'react';
import PropTypes from 'prop-types';
import '../components/_navbar.scss'; // Importing SCSS for navbar styles

const NavbarBrand = ({ children, href, ...props }) => {
    return (
        <a className="navbar-brand" href={href} {...props}>
            {children}
        </a>
    );
};

NavbarBrand.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
};

export default NavbarBrand;
