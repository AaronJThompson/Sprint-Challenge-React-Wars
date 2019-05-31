import React from 'react';
import Dog from './Dog';
export default function DogContainer(props) {
    let { dogs } = props;

    function createDogs(dogs){
        let dogComponenets = []
        for (const breed in dogs) {
            let componenet = (
                <Dog
                    breed={breed}
                    image={dogs[breed].imageURL}
                />
            )
            dogComponenets.push(componenet);
        }
        return dogComponenets;
    }
    return (
        <div className="dog-container">
            {
                createDogs(dogs)
            }
        </div>
    )
}