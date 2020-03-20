import React from "react";
import SearchBox from '../SearchBox/SearchBox';
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import './Products.css';

function Products(props) {
    
    
    var result = props.match.params.solution_title 
    
    console.log(result);
    
   const filteredProducts = props.items.filter((product) =>{
        return product.solution === result;
   });
    console.log(filteredProducts)
    
    return (
        <div style={{ marginTop: 20, padding: 30 }}>
            <SearchBox {...props} handleChange={props.handleChange} />
            <Grid container spacing={2} justify="center">
               
                {filteredProducts.map((product,index) =>
                    <Grid
                        item xs={12} sm={6} md={3} key={product._id}>
                         <div className="card-container">
                         
                         <Link to ={ {pathname:`/${product._id}`}}>
                             <div className='card-image'>
                                <img src={product.images[0]} alt="product" />
                            </div>
            <div className='card-title-description'>
                <h1>{product.title}</h1>
                <h4>{product.solution}</h4>
                <p>{product.description} </p>
            </div>
                {product.title}</Link>
        </div>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

export default Products;