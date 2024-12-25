import React from 'react';
import PropTypes from 'prop-types';
import '../components/_pagination.scss'; // Importing SCSS for pagination styles

const Pagination = ({ children, ...props }) => {
    return (
        <nav {...props}>
            <ul className="pagination">
                {children}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Pagination;
