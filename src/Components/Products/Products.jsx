import React from "react";
import Product from "../Product/Product";
import SearchBox from '../SearchBox/SearchBox';
import GroupBy from '../GroupBy/GroupBy';
import { Grid } from "@material-ui/core";

import './Products.css';

function Products(props) {
    return (
        <div className="Products">
            <div className="UtilityBar">
                <SearchBox {...props} handleChange={props.handleChange} />
                <GroupBy handleGroupBy={props.handleGroupBy} />
            </div>
            <Grid container spacing={2} justify="center">
                {props.items.map((product, index) =>
                    <Grid
                        item xs={12} sm={6} md={3} key={product.id}>
                        <Product key={index} changeIndex={props.changeIndexOfProduct} id={index} item={product} />
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

export default Products;