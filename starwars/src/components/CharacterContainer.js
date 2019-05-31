import React from 'react';
import './StarWars.css';
import Character from './Character';
export default function CharacterContainer(props){
    let { charData } = props;
    function addIdsToCharacter(chars) {
        let matchPeopleId = /(?<=people\/)\d+/
        return chars.map((char) => {
            char.id = char.url.match(matchPeopleId)[0];
            return char;
        })
    }
    return (
        <div className="character-container">
            {
                charData.map((char) => {
                    return (
                        <Character
                    )
                })
            }
        </div>
    )
}