import React from 'react';
import './StarWars.css';

export default function Character(props){
    //Destructure props object into variables
    let { name, birthYear, gender, hairColor, height } = props;

    return (
        <div className="character">
            <h2>{name}</h2>
            <ul>
                <li>Birth Year: {birthYear}</li>
                <li>Gender: {gender}</li>
                <li>Hair Color: {hairColor}</li>
                <li>Height: {height}</li>
            </ul>
        </div>
    )
}