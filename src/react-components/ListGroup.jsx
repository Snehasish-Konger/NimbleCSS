import React from 'react';
import PropTypes from 'prop-types';
import '../components/_list-group.scss'; // Importing SCSS for list group styles

const ListGroup = ({ children, flush, ...props }) => {
    return (
        <ul className={`list-group ${flush ? 'list-group-flush' : ''}`} {...props}>
            {children}
        </ul>
    );
};

ListGroup.propTypes = {
    children: PropTypes.node.isRequired,
    flush: PropTypes.bool,
};

export default ListGroup;
