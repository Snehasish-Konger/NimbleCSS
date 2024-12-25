import React from 'react';
import PropTypes from 'prop-types';
import '../components/_tabs.scss'; // Importing SCSS for tabs styles

const TabPane = ({ children, active, ...props }) => {
    return (
        <div className={`tab-pane fade ${active ? 'show active' : ''}`} {...props}>
            {children}
        </div>
    );
};

TabPane.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool.isRequired,
};

export default TabPane;
