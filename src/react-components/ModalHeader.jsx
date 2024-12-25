import React from 'react';
import PropTypes from 'prop-types';
import '../components/_modals.scss'; // Importing SCSS for modal styles

const ModalHeader = ({ children, ...props }) => {
    return (
        <div className="modal-header" {...props}>
            <h5 className="modal-title">{children}</h5>
        </div>
    );
};

ModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ModalHeader;
