import React from 'react';
import PropTypes from 'prop-types';
import '../components/_list-group.scss'; // Importing SCSS for list group styles

const ListGroupItemHeading = ({ children, ...props }) => {
    return (
        <h5 className="list-group-item-heading" {...props}>
            {children}
        </h5>
    );
};

ListGroupItemHeading.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ListGroupItemHeading;
