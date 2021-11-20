import React from 'react';

const Scroll = ({ children }) => {
    return (
        <div className='vh-75 overflow-y-scroll bt'>
            { children }
        </div>
    );
}

export default Scroll;