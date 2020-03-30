import React, { Component } from "react";
import SearchBox from '../SearchBox/SearchBox';
import GroupBy from '../GroupBy/GroupBy';
import Pagination from '../Pagination/Pagination';
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from 'axios';

import './Products.css';

class Products extends Component {
    state = {
        products: [],
        pageOfItems: [],
        searchField: "",
        filteredProducts: [],
        showGroubByCategory: false
    }

    onChangePage = this.onChangePage.bind(this);

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.solution_title !== this.props.match.params.solution_title) {
            if (typeof this.props.match.params.solution_title === 'undefined') {
                axios.get(`http://localhost:5000/products`)
                    .then(res => {
                        this.setState({ products: res.data });
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                axios.get(`http://localhost:5000/${this.props.match.params.solution_title}/products`)
                    .then(res => {
                        this.setState({ products: res.data });
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }

    componentDidMount() {
        if (typeof this.props.match.params.solution_title === 'undefined') {
            axios.get(`http://localhost:5000/products`)
                .then(res => {
                    this.setState({ products: res.data });
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            axios.get(`http://localhost:5000/${this.props.match.params.solution_title}/products`)
                .then(res => {
                    this.setState({ products: res.data });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }

    handleChange = (e) => {
        let filteredProducts = [...this.state.products];

        filteredProducts = filteredProducts.filter((product) =>
            (product.solution.toLowerCase().includes(e.target.value.toLowerCase())));

        this.setState({ searchField: e.target.value, filteredProducts: filteredProducts });
    }

    handleGroupBy = () => {
        this.setState({ showGroubByCategory: !this.state.showGroubByCategory });
    }

    render() {
        let pagination;

        if (this.state.searchField.length > 0 && this.state.filteredProducts.length > 0) {
            pagination = <Pagination items={this.state.filteredProducts} onChangePage={this.onChangePage} />
        } else {
            pagination = <Pagination items={this.state.products} onChangePage={this.onChangePage} />
        }

        return (
            <div className="Products">
                <div className="UtilityBar">
                    <SearchBox handleChange={this.handleChange} />
                    <GroupBy handleGroupBy={this.props.handleGroupBy} />
                </div>
                <Grid container spacing={2} justify="center">
                    {this.state.pageOfItems.map(product =>
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
                                    {product.title}
                                </Link>
                            </div>
                        </Grid>
                    )}
                </Grid>
                {pagination}
            </div>
        )
    }
}

export default Products;