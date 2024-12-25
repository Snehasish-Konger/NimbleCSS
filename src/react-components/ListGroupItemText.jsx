import React from 'react';
import PropTypes from 'prop-types';
import '../components/_list-group.scss'; // Importing SCSS for list group styles

const ListGroupItemText = ({ children, ...props }) => {
    return (
        <p className="list-group-item-text" {...props}>
            {children}
        </p>
    );
};

ListGroupItemText.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ListGroupItemText;
