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
        
      );
  }

/*const CardItem = styled.div`
width: 35%;
text-align: center;
margin-left: 5%;
margin-right: -3%;
margin-bottom: 3%;

`;*/




export default Products;