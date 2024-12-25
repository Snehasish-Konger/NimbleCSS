import React from 'react';
import PropTypes from 'prop-types';
import '../components/_modal.scss'; // Importing SCSS for modal styles

const ModalFooter = ({ children, ...props }) => {
    return (
        <div className="modal-footer" {...props}>
            {children}
        </div>
    );
};

ModalFooter.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ModalFooter;
