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

    //delete request to delete one product
    const deleteProduct = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
            .then((res)=>{
                console.log(res.data);
                setProducts(products.filter(product=>product._id !== idFromBelow));
            })
            .catch((err)=>console.log(err))
    }

    //map through products to display all, with link to view one product, edit product, and delete product
    return (
        <div className="col-8 mx-auto border border-5 border-dark p-5 rounded mt-5 ">
            <h1 className="text-info">All Products:</h1>
            {
                products.map((product, index) => (
                    <div key = {product.id} className="d-flex justify-content-center align-items-center list-group-item  border-0">
                        <Link className="text-decoration-none" to={`/product/${product._id}`}>{product.title}</Link>
                        <Link className="mx-2 btn btn-warning" to={`/product/edit/${product._id}`}>Edit</Link>
                        <button className="btn btn-danger" onClick={()=>deleteProduct(product._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList;