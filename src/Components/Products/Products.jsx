import React from "react";
import Product from "../Product/Product";
import SearchBox from '../SearchBox/SearchBox';
import GroupBy from '../GroupBy/GroupBy';
import Pagination from '../Pagination/Pagination';
import { Grid } from "@material-ui/core";

import './Products.css';

function Products(props) {
    return (
        <div className="Products">
            <div className="UtilityBar">
                <SearchBox handleChange={props.handleChange} />
                <GroupBy handleGroupBy={props.handleGroupBy} />
            </div>
            <Grid container spacing={2} justify="center">
                {props.items.map((product, index) =>
                    <Grid
                        item xs={12} sm={6} md={3} key={product._id}>
                        <Product key={index} changeIndex={props.changeIndexOfProduct} id={index} item={product} />
                    </Grid>
                )}
            </Grid>
            <div>
                <div>
                    {props.pageOfItems.map(item =>
                        <div key={item._id}>
                            <div>
                                <img src={item.images[0]} width="150" alt="product" />
                            </div>
                            <div className='card-title-description'>
                                <h1>{item.title}</h1>
                                <h4>{item.solution}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )}
                    <Pagination items={props.paginationItems} onChangePage={props.onChangePage} />
                </div>
            </div>
        </div>
    )
}

export default Products;