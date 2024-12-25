import React from 'react';
import PropTypes from 'prop-types';
import '../components/_tabs.scss'; // Importing SCSS for tabs styles

const TabContent = ({ children, ...props }) => {
    return (
        <div className="tab-content" {...props}>
            {children}
        </div>
    );
};

TabContent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TabContent;
