import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../components/_tooltips.scss'; // Importing SCSS for tooltip styles

const TooltipWrapper = ({ children, tooltipText, position, ...props }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="tooltip-wrapper"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            {...props}
        >
            {children}
            {visible && (
                <div className={`tooltip bs-tooltip-${position}`}>
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">{tooltipText}</div>
                </div>
            )}
        </div>
    );
};

TooltipWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    tooltipText: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
};

export default TooltipWrapper;
