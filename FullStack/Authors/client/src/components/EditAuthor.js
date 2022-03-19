import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';

const EditAuthor = (props) => {

    //keep track of what is being entered via useState hook
    const [name, setName] = useState("");

    //get id from params
    const {id} = useParams();

    //keep track of errors for validation
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    //use a get request to get data for current author and autofill form with it
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res)=>{
                console.log(res.data);
                setName(res.data.name);
            })
            .catch((err)=>console.log(err))
    }, [id])

    //handler when form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new document
        axios.put(`http://localhost:8000/api/authors/${id}`,
        //set up req.body
        {
            name   //shortcut syntax for name: name
        })
            .then(res=>{
                console.log(res.data);
                //after upating navigate back to All Authors
                navigate('/');
            })
            .catch((err)=>{
                console.log(err);
                console.log(err.response.data);
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    //return form, and display validation errors if exist
    return (
        <div className="col-8 mx-auto bg-dark text-light p-5 rounded">
            <h1 className="text-info">Favorite authors</h1>
            <Link to="/">Home</Link>
            <h3>Edit this author:</h3>
            <form onSubmit={onSubmitHandler} className="d-flex justify-content-center text-info">
                <div className="form-group col-5">
                    <label>Name</label>
                    <input type="text" className="form-control" value={name} onChange = {(e)=>setName(e.target.value)}/>
                    {
                        errors.name ?
                            <span className="text-danger">{errors.name.message}</span>
                            : null
                    }
                    <Link className="btn btn-info mt-4 mx-2" to="/">Cancel</Link>
                    <button className="btn btn-info mt-4">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditAuthor;