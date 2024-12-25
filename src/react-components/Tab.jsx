import React from 'react';
import PropTypes from 'prop-types';
import '../components/_tabs.scss'; // Importing SCSS for tabs styles

const Tab = ({ children, active, onClick, ...props }) => {
    return (
        <button
            className={`nav-link ${active ? 'active' : ''}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

Tab.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Tab;
