import React from 'react';
import PropTypes from 'prop-types';
import '../components/_form.scss'; // Importing SCSS for form styles

const Radio = ({ name, value, label, checked, onChange, ...props }) => {
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="radio"
                name={name}
                value={value}
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

Radio.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Radio;
