import React from 'react';

export default function Dog(props) {
    let { breed, image } = props;

    return (
        <div className="dog">
            <h2>{breed}</h2>
            <img href={image} alt={breed} />
        </div>
    )
}