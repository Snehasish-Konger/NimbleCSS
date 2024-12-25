import React from 'react';
import PropTypes from 'prop-types';
import '../components/_modal.scss'; // Importing SCSS for modal styles

const ModalBody = ({ children, ...props }) => {
    return (
        <div className="modal-body" {...props}>
            {children}
        </div>
    );
};

ModalBody.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ModalBody;
