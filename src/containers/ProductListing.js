import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";
import { useEffect } from "react";

const ProductListing=()=>{
    const products=useSelector((state)=>state);
    const dispatch = useDispatch();

    const fetchProducts= async()=>{
        const response = await axios.get("https://fakestoreapi.com/products").catch((error)=>{
            console.log("error:",error);
        });
        dispatch(setProducts(response.data));
    }

    useEffect(()=>{
      fetchProducts();
    },[]);

    console.log("products:",products);
    return(
    <div className="ui grid container" style={{marginTop:"10px"}}>
        <ProductComponent/>
    </div>
    );
};

export default ProductListing;