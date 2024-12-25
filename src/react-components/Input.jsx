import React from 'react';
import PropTypes from 'prop-types';
import '../components/_form.scss'; // Importing component-specific styles

const Input = ({ type, value, onChange, placeholder, ...props }) => {
    return (
        <input 
            type={type} 
            className="form-control" 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} 
            {...props} 
        />
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

export default Input;
