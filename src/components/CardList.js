import React from 'react';
import Card from './Card';

const CardList = ({ cats }) => {
    return (
        <div>
            {
                cats.map(cat => {
                    return (
                        <Card 
                            key={cat.id} 
                            id={cat.id} 
                            name={cat.name} 
                            email={cat.email} 
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;