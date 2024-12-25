import React from 'react';
import PropTypes from 'prop-types';
import '../components/_tooltips.scss'; // Importing SCSS for tooltip styles

const Tooltip = ({ children, text, position, visible, ...props }) => {
    return (
        <div className="tooltip-wrapper" {...props}>
            {children}
            {visible && (
                <div className={`tooltip bs-tooltip-${position}`}>
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">{text}</div>
                </div>
            )}
        </div>
    );
};

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
    visible: PropTypes.bool,
};

export default Tooltip;
