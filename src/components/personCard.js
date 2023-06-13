import React, {useState} from 'react';

const PersonCard = (props) => {
    const [currentAge, olderAge] = useState(props.age);

    
    return (
        <div className="App">
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick = {(event) => olderAge(currentAge + 1)} >Birthday button for {props.firstName} {props.lastName}</button>
        
        </div>
    )
}

export default PersonCard