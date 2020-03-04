import React from "react";
import Product from "../Product/Product";
import SearchBox from '../SearchBox/SearchBox';
import { Grid } from "@material-ui/core";

import './Products.css';

function Products(props) {
    return (
        <div style={{ marginTop: 20, padding: 30 }}>
            <SearchBox {...props} handleChange={props.handleChange} />
            <Grid container spacing={2} justify="center">
                {props.items.map((product, index) =>
                    <Grid
                        item xs={12} sm={6} md={3} key={product.title}>
                        <Product key={index} changeIndex={props.changeIndexOfProduct} id={index} item={product} />
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

export default Products;