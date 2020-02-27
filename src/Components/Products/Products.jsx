import React from "react";
import Product from "../Product/Product";
import './Products.css';


function Products(props) {
    return (
        
        <div className="Big-Container">
            {props.items.map((product,index) =>
                <Product key={index} changeIndex={props.changeIndexOfProduct} id={index} item={product} />
            )}
        </div>
       
    )
}

export default Products;