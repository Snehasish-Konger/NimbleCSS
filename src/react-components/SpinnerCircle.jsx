import React from 'react';
import PropTypes from 'prop-types';
import '../components/_spinner.scss'; // Importing SCSS for spinner styles

const SpinnerCircle = ({ variant, size, ...props }) => {
    return (
        <div
            className={`spinner-border text-${variant} spinner-${size}`}
            role="status"
            {...props}
        >
            <span className="sr-only">Loading...</span>
        </div>
    );
};

SpinnerCircle.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default SpinnerCircle;
