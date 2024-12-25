import React from 'react';
import PropTypes from 'prop-types';
import '../components/_spinner.scss'; // Importing SCSS for spinner styles

const SpinnerDots = ({ variant, size, ...props }) => {
    return (
        <div className={`spinner-dots text-${variant} spinner-${size}`} {...props}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

SpinnerDots.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default SpinnerDots;
