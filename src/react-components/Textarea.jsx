import React from 'react';
import PropTypes from 'prop-types';
import '../components/_forms.scss'; // Importing SCSS for form styles

const Textarea = ({ value, onChange, rows, placeholder, ...props }) => {
    return (
        <textarea
            className="form-control"
            value={value}
            onChange={onChange}
            rows={rows}
            placeholder={placeholder}
            {...props}
        ></textarea>
    );
};

Textarea.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    rows: PropTypes.number,
    placeholder: PropTypes.string,
};

export default Textarea;
