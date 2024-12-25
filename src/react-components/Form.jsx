import React from 'react';
import PropTypes from 'prop-types';
import '../components/_form.scss'; // Importing component-specific styles

const Form = ({ children, onSubmit, ...props }) => {
    return (
        <form onSubmit={onSubmit} {...props}>
            {children}
        </form>
    );
};

Form.propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Form;
