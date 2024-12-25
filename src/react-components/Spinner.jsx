import React from 'react';
import PropTypes from 'prop-types';
import '../components/_spinner.scss'; // Importing SCSS for spinner styles

const Spinner = ({ type, variant, size, ...props }) => {
    return (
        <div
            className={`spinner spinner-${type} text-${variant} spinner-${size}`}
            role="status"
            {...props}
        >
            <span className="sr-only">Loading...</span>
        </div>
    );
};

Spinner.propTypes = {
    type: PropTypes.oneOf(['border', 'grow']).isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Spinner;
