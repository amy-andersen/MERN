import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const OneProduct = (props) =>{

    const navigate = useNavigate();

    const [product, setProduct] = useState({});

    //get id from params
    const {id} = useParams();

    //get request for one product, using id sent through params from product list
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err)=>console.log(err))
    }, [id])

    //delete request to delete one product
    const deleteProduct = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
            .then((res)=>{
                console.log(res.data);
                navigate('/');
            })
            .catch((err)=>console.log(err))
    }

    return(
        <div className="card col-7 mx-auto bg-dark text-light">
            <div className="card-body">
                <h2 className="card-title text-info">{product.title}</h2>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
                <button className="btn btn-danger" onClick={()=>deleteProduct(product._id)}>Delete</button>
            </div>
        </div>
    )
}

export default OneProduct;