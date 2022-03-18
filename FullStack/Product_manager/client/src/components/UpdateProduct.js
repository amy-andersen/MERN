import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';

const UpdateProduct = (props) => {

// we don't need to update products state here because navigating back to main will cause useEffect to update list

    //keep track of what is being entered via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    //get id from params
    const {id} = useParams();

    const navigate = useNavigate();


    //use a get request to get data for current product and autofill form with it
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err)=>console.log(err))
    }, [id])

    //handler when form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a put request to update the document
        axios.put(`http://localhost:8000/api/products/${id}`,
        //set up req.body
        {
            title,    //shortcut syntax for title: title
            price,
            description
        })
            .then(res=>{
                console.log(res.data);
                //after updating send back to main pg
                navigate('/');
            })
            .catch((err)=>console.log(err))
    }

    //form to update product
    return (
        <div className="col-8 mx-auto bg-dark text-light p-5 rounded">
            <h1>Update Product:</h1>
            <form onSubmit={onSubmitHandler} className="d-flex justify-content-center text-info">
                <div className="form-group col-5">
                    <label>Title</label>
                    <input type="text" className="form-control" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
                    <label>Price</label>
                    <input type="number" className="form-control" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
                    <label>Description</label>
                    <input type="text" className="form-control" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
                    <button className="btn btn-info mt-4">Update product!</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProduct;