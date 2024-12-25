import React from 'react';
import PropTypes from 'prop-types';
import '../components/_form.scss'; // Importing SCSS for form styles

const Select = ({ options, value, onChange, ...props }) => {
    return (
        <select className="form-select" value={value} onChange={onChange} {...props}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

Select.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Select;
