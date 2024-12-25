import React from 'react';
import PropTypes from 'prop-types';
import '../components/_pagination.scss'; // Importing SCSS for pagination styles

const PaginationItem = ({ children, active, ...props }) => {
    return (
        <li className={`page-item ${active ? 'active' : ''}`} {...props}>
            {children}
        </li>
    );
};

PaginationItem.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
};

export default PaginationItem;
