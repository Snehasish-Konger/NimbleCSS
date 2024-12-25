import React from 'react';
import PropTypes from 'prop-types';
import '../components/_breadcrumb.scss'; // Importing component-specific styles

const BreadcrumbItem = ({ children, active, ...props }) => {
    return (
        <li className={`breadcrumb-item${active ? ' active' : ''}`} {...props}>
            {children}
        </li>
    );
};

BreadcrumbItem.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
};

export default BreadcrumbItem;
