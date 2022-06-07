import React ,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {setProducts} from '../redux/actions/ProductActions';
import axios from 'axios';
import ProductComponent from "./ProductComponent";
const ProductListing = () => {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();
    const fetchProduct = async() =>{
        const res = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            console.log(err);
        })
        dispatch(setProducts(res.data));
    }

    useEffect(()=>{
        fetchProduct();
    },[]);
        console.log("Products: ",products);
    return(
        <div className="ui container grid">
            <ProductComponent/>
        </div>
    )
}
export default ProductListing;