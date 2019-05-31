import React from 'react';
import './StarWars.css';
import Character from './Character';
export default function CharacterContainer(props){
    let { charData } = props;
    
    function addIdsToCharacter(chars) {

        // Regex match for people id in StarWars API url
        let matchPeopleId = /(?<=people\/)\d+/

        return chars.map((char) => {

            // Get first match. Example: https://swapi.co/api/people/12/ will match '12'
            char.id = parseInt(char.url.match(matchPeopleId)[0]);

            return char;
        })
    }
    //Create new array with ID field added
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