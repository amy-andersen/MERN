import React, {useState, useEffect} from 'react';

const Pokemon = (props) => {

    //set empty array
    const [state,setState] = useState([]);

    //will run as soon as JSX is rendered
    useEffect(() => {
        console.log("test")
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                return response.json()
            })
            //store the json data
            .then(response => {
                setState(response.results)
            })
            .catch((err)=>{
                console.log(err);
            })
    }, []);
    //add empty array as second param so useEffect doesn't keep running

    //return the names of the 807 pokemon
    return (
        <div>
            {state? state.map((item, index)=>{
                return(
                    <div key={index}>
                        {item.name}
                    </div>
                )
            }):null}
        </div>
    );

}

export default Pokemon;