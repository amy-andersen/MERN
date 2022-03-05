import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

const Planets = (props) => {
    const {id} = useParams();
    const [planetData, setPlanetData] = useState({});
    const [isError, setIsError] = useState(true);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then((res)=>{
                setIsError(false);
                console.log(isError);
                console.log(res.data);
                setPlanetData(res.data);
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
            <h1>{planetData.name}</h1>
            <p>Climate: {planetData.climate}</p>
            <p>Created: {planetData.created}</p>
            <p>Diameter: {planetData.diameter}</p>
            <p>Gravity: {planetData.gravity}</p>
            <p>Population: {planetData.population}</p>
            <p>Surface Water: {planetData.surface_water}</p>
            <p>Terrain: {planetData.terrain}</p>
        </div>
        )
    }
};

export default Planets;