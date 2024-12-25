import React from 'react';
import PropTypes from 'prop-types';
import '../layout/_header.scss'; // Importing layout-specific styles

const Header = ({ children, ...props }) => {
    return (
        <header className="header bg-primary text-white text-center py-5" {...props}>
            <div className="container">
                {children}
            </div>
        </header>
    );
};

Header.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Header;
