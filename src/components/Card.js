import React from 'react';

const Card = ({ id, name, email }) => {

    return (
        <div className='dib ma2 pa2 bw2 br2 shadow-5 light-gray bg-near-black grow tc'>
            <img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt='Cat' />
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;