import React from 'react';
import PropTypes from 'prop-types';
import '../components/_jumbotron.scss'; // Importing component-specific styles

const Jumbotron = ({ children, ...props }) => {
    return (
        <div className="jumbotron" {...props}>
            <div className="container">
                {children}
            </div>
        </div>
    );
};

Jumbotron.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Jumbotron;
