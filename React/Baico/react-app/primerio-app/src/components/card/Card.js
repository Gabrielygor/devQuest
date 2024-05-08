
import React from 'react';
import './Card.css';

const Card = ({ children, color, showCardColor }) => {
    return (
        <div className='card' style={{ backgroundColor: color }} onClick={() => showCardColor}>
            {children}
        </div>
    );
};

Card.defaultProps = {
    color: 'red'
};

export default Card;