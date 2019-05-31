import React from 'react';
import './StarWars.css';
import Character from './Character';
export default function CharacterContainer(props){
    let { charData } = props;

    return (
        <div className="character-container">
            {
                charData.map((char) => {
                    return (
                    )
                })
            }
        </div>
    )
}