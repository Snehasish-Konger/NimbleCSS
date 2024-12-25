import React from 'react';
import PropTypes from 'prop-types';
import '../components/_form.scss'; // Importing SCSS for form styles

const Switch = ({ id, label, checked, onChange, ...props }) => {
    return (
        <div className="form-check form-switch">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id={id}
                checked={checked}
                onChange={onChange}
                {...props}
            />
            {label && (
                <label className="form-check-label" htmlFor={id}>
                    {label}
                </label>
            )}
        </div>
    );
};

Switch.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Switch;
