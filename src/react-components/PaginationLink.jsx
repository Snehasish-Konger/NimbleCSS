import React from 'react';
import PropTypes from 'prop-types';
import '../components/_pagination.scss'; // Importing SCSS for pagination styles

const PaginationLink = ({ href, children, disabled, ...props }) => {
    return (
        <a
            className={`page-link ${disabled ? 'disabled' : ''}`}
            href={disabled ? '#' : href}
            {...props}
        >
            {children}
        </a>
    );
};

PaginationLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
};

export default PaginationLink;
