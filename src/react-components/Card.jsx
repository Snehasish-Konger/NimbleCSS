import React from 'react';
import PropTypes from 'prop-types';
import '../components/_card.scss'; // Importing component-specific styles

const Card = ({ children, ...props }) => {
    return (
        <div className="card" {...props}>
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Card;
