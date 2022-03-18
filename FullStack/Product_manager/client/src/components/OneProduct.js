import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const OneProduct = (props) =>{

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

    return(
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default OneProduct;