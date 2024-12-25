import React from 'react';
import PropTypes from 'prop-types';
import '../components/_form.scss'; // Importing component-specific styles

const Checkbox = ({ label, checked, onChange, ...props }) => {
    return (
        <div className="form-check">
            <input 
                className="form-check-input" 
                type="checkbox" 
                checked={checked} 
                onChange={onChange} 
                {...props}
            />
            <label className="form-check-label">
                {label}
            </label>
        </div>
    );
};

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Checkbox;
