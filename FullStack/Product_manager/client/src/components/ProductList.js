import React, { useEffect } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const ProductList = (props) => {
    
    //getting state from Main through props so that list updates when state changed in ProductForm
    const {products, setProducts} = props;

    //make get request to API upon loading
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err)=>console.log(err))
    }, []);

    //map through products to display all
    return (
        <div>
            <h1>All Products:</h1>
            {
                products.map((product, index) => (
                    <div key = {product.id}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList;