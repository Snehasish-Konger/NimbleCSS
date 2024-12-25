import React from 'react';
import PropTypes from 'prop-types';
import '../components/_list-group.scss'; // Importing SCSS for list group styles

const ListGroupItem = ({ children, active, disabled, ...props }) => {
    return (
        <li
            className={`list-group-item ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
            {...props}
        >
            {children}
        </li>
    );
};

ListGroupItem.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default ListGroupItem;
