import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Form = (props) => {

    const [category, setCategory] = useState("");
    const [id, setId] = useState(0);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`);
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>Search for: </label>
                <select onChange = {(e) => setCategory(e.target.value)}>
                    <option value="" defaultValue>Select a category</option>
                    <option value="people" name="category">People</option>
                    <option value="planets" name="category">Planets</option>
                </select>
                <label>ID: </label>
                <input type="text" onChange={(e) => setId(e.target.value)}/>
                <button>Search</button>
            </form>
        </div>
    )
};

export default Form;