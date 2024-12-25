import React from 'react';
import PropTypes from 'prop-types';
import '../components/_navbar.scss'; // Importing SCSS for navbar styles

const NavbarToggle = ({ target, onClick, ...props }) => {
    return (
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target={`#${target}`}
            onClick={onClick}
            {...props}
        >
            <span className="navbar-toggler-icon"></span>
        </button>
    );
};

NavbarToggle.propTypes = {
    target: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default NavbarToggle;
