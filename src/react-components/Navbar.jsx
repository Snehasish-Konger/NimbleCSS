import React from 'react';
import PropTypes from 'prop-types';
import '../components/_navbar.scss'; // Importing SCSS for navbar styles

const Navbar = ({ children, expand, bg, variant, ...props }) => {
    return (
        <nav className={`navbar navbar-expand-${expand} bg-${bg} navbar-${variant}`} {...props}>
            {children}
        </nav>
    );
};

Navbar.propTypes = {
    children: PropTypes.node.isRequired,
    expand: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']).isRequired,
    bg: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary', 'info', 'success', 'warning', 'danger']).isRequired,
    variant: PropTypes.oneOf(['light', 'dark']).isRequired,
};

export default Navbar;
