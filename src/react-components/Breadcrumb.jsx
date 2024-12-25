import React from 'react';
import PropTypes from 'prop-types';
import '../components/_breadcrumb.scss'; // Importing component-specific styles

const Breadcrumb = ({ children, ...props }) => {
    return (
        <nav aria-label="breadcrumb" {...props}>
            <ol className="breadcrumb">
                {children}
            </ol>
        </nav>
    );
};

Breadcrumb.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Breadcrumb;
