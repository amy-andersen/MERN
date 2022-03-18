import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const ProductForm = (props) => {

    //getting state from Main through props
    const {products, setProducts} = props;

    //keep track of what is being entered via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    //handler when form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new document
        axios.post('http://localhost:8000/api/products',
        //set up req.body
        {
            title,    //shortcut syntax for title: title
            price,
            description
        })
            .then(res=>{
                console.log(res.data);
                //update products array
                setProducts([...products, res.data]);
                //clear out form
                setTitle("");
                setPrice("");
                setDescription("");

            })
            .catch((err)=>console.log(err))
    }
    
    return (
        <div>
            <h1>Add a Product:</h1>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="number" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="text" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
                </p>
                <button>Add a product!</button>
            </form>
        </div>

    )
}
export default ProductForm;