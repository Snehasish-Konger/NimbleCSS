import React from 'react';
import PropTypes from 'prop-types';
import '../components/_tables.scss'; // Importing SCSS for table styles

const Table = ({ children, striped, bordered, hover, responsive, ...props }) => {
    return (
        <div className={responsive ? 'table-responsive' : ''}>
            <table
                className={`table ${striped ? 'table-striped' : ''} ${bordered ? 'table-bordered' : ''} ${hover ? 'table-hover' : ''}`}
                {...props}
            >
                {children}
            </table>
        </div>
    );
};

Table.propTypes = {
    children: PropTypes.node.isRequired,
    striped: PropTypes.bool,
    bordered: PropTypes.bool,
    hover: PropTypes.bool,
    responsive: PropTypes.bool,
};

export default Table;
