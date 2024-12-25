import React from 'react';
import PropTypes from 'prop-types';
import '../layout/_footer.scss'; // Importing layout-specific styles

const Footer = ({ children, ...props }) => {
    return (
        <footer className="footer bg-dark text-white py-4" {...props}>
            <div className="container">
                {children}
            </div>
        </footer>
    );
};

Footer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Footer;
