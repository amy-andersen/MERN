import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

const People = (props) => {
    const {id} = useParams();
    const [personData, setPersonData] = useState({});
    const [isError, setIsError] = useState(true);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then((res)=>{
                setIsError(false);
                console.log(isError);
                console.log(res.data);
                setPersonData(res.data);
            })
            .catch((err)=>setIsError(true))
    }, [id,isError])

    if (isError) {
        return(
            <div>
                <h2>These aren't the droids you're looking for.</h2>
                <img src="https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg?w=800&quality=85" alt=""/>
            </div>
        )
    } else {
    return(
        <div>
            <h1>{personData.name}</h1>
            <p>Height: {personData.height}</p>
            <p>Mass: {personData.mass}</p>
            <p>Hair Color: {personData.hair_color}</p>
            <p>Skin Color: {personData.skin_color}</p>
            <p>Eye Color: {personData.eye_color}</p>
            <p>Birth Year: {personData.birth_year}</p>
            <p>Gender: {personData.gender}</p>
        </div>
        )
    }
};

export default People;