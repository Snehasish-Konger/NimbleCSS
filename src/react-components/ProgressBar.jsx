import React from 'react';
import PropTypes from 'prop-types';
import '../components/_progress.scss'; // Importing SCSS for progress bar styles

const ProgressBar = ({ value, max, striped, animated, variant, ...props }) => {
    return (
        <div
            className={`progress-bar ${striped ? 'progress-bar-striped' : ''} ${animated ? 'progress-bar-animated' : ''} bg-${variant}`}
            role="progressbar"
            style={{ width: `${(value / max) * 100}%` }}
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax={max}
            {...props}
        >
            {`${(value / max) * 100}%`}
        </div>
    );
};

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    striped: PropTypes.bool,
    animated: PropTypes.bool,
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
};

export default ProgressBar;
