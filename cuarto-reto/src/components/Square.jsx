import React from 'react';
import '../styles/square.scss';
const Square = () => {
    return (
        <div className='container'>
        <h1 className='container__title'>Square that changes his background-color</h1>
            <i className="bi bi-square container__square"></i>
        </div>
    );
}

export default Square;
