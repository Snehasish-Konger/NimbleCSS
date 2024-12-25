import React from 'react';
import PropTypes from 'prop-types';
import '../components/_navbar.scss'; // Importing SCSS for navbar styles

const NavbarCollapse = ({ children, id, ...props }) => {
    return (
        <div className="collapse navbar-collapse" id={id} {...props}>
            {children}
        </div>
    );
};

NavbarCollapse.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
};

export default NavbarCollapse;
