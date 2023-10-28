import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import image from "../images/img-home.jpg";
import ProductList from '../Help/ProductList'
import '@splidejs/splide/css';



function Product() {


    return (
        <>
            <Navbar />
            <div className="product" >
                <div className="ProductList1">
                    <p></p>
                <ProductList />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Product;


