import React from "react";
import SearchBox from '../SearchBox/SearchBox';
import GroupBy from '../GroupBy/GroupBy';
import Pagination from '../Pagination/Pagination';
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import './Products.css';

function Products(props) {
    let Products = [];

    if (typeof props.match.params.solution_title === 'undefined') {
        Products = props.items
    } else {
        Products = props.items.filter((product) => {
            return product.solution === props.match.params.solution_title;
        });
    }
    
    return (
        <div className="Products">
            <div className="UtilityBar">
                <SearchBox handleChange={props.handleChange} />
                <GroupBy handleGroupBy={props.handleGroupBy} />
            </div>
            <Grid container spacing={2} justify="center">
                {Products.map((product, index) =>
                    <Grid
                        item xs={12} sm={6} md={3} key={product._id}>
                        <div className="card-container">
                            <Link to={{ pathname: `/${product._id}` }}>
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