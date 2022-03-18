import React, {useState} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';


const Main = (props) => {

    //set up some lifted state to be passed into form and display all components
    //we want all products to update once a new one is created.. updating state will trigger this
    const [products, setProducts] = useState([]);

    return(
        <div>
            <ProductForm products={products} setProducts={setProducts}/>
            <ProductList products={products} setProducts={setProducts}/>
        </div>

    )
}

export default Main;