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
    let charsWithID = addIdsToCharacter(charData);
    return (
        <div className="character-container">
            {
                charsWithID.map((char) => {
                    return (
                        <Character 
                            key={`character${char.id}`}
                            name={char.name}
                            birthYear={char.birth_year}
                            gender={char.gender}
                            hairColor={char.hair_color}
                            height={char.height}
                        />
                    )
                })
            }
        </div>
    )
}