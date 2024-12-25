import React from 'react';
import PropTypes from 'prop-types';
import '../components/_modal.scss'; // Importing SCSS for modal styles

const Modal = ({ children, show, onClose, ...props }) => {
    return (
        <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} {...props}>
            <div className="modal-dialog">
                <div className="modal-content">
                    {children}
                    <button className="btn-close" onClick={onClose} aria-label="Close"></button>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
