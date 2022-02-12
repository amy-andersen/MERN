import React, {useState} from 'react';

//create Person component
const Person = (props) => {
    const {firstName, lastName, hairColor } = props; //destructure props into variables
    const [ age, setAge ] = useState(props.age); //use state for age, and birthday button to increase age by 1
    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ (event) => setAge(age +1)}>Birthday Button for {firstName} {lastName} </button> 
        </div>
    );
}

export default Person;