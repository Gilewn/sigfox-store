import React, { Component } from "react";
import GroupBy from '../GroupBy/GroupBy';
import Pagination from '../Pagination/Pagination';
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from 'axios';
import { MDBContainer,MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import './Products.css';

class Products extends Component {
    state = {
        products: [],
        pageOfItems: [],
        showGroubByOrder: false
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

    handleGroupBy = (e) => {
        let sortedProducts = [...this.state.products];

        if (!this.state.showGroubByOrder) {
            sortedProducts = sortedProducts.sort((a, b) => {
                if (a[e] < b[e]) { return -1; }
                if (a[e] > b[e]) { return 1; }
                return 0;
            });
        } else {
            sortedProducts = sortedProducts.reverse((a, b) => {
                if (a[e] < b[e]) { return -1; }
                if (a[e] > b[e]) { return 1; }
                return 0;
            });
        }

        this.setState({
            showGroubByOrder: !this.state.showGroubByOrder,
            products: sortedProducts
        });
    }

    render() {
        return (
            <div className="Products">
                <div className="UtilityBar">
                    <GroupBy
                        handleGroupBy={this.handleGroupBy}
                        listItems={this.state.products}
                        showGroubByOrder={this.state.showGroubByOrder}
                    />
                </div>
                <Grid container spacing={2} justify="center">
                    {this.state.pageOfItems.map(product =>
                        <Grid
                            item xs={12} sm={6} md={6} lg={3} key={product._id}>
                            <div className="card-container" >
                                <Link to={{ pathname: `/${product._id}`  , state :{ params:{title:product.solution}}}}>
                                <MDBCol >
                                <MDBCard>
                                <MDBCardImage className="img-fluid" src={product.images[0]}
                                    waves />
                                <MDBCardBody>
                                <MDBCardTitle>{product.title}</MDBCardTitle>
                                <MDBCardTitle>{product.solution}</MDBCardTitle>
                                <MDBCardText>{product.description}</MDBCardText>
                                </MDBCardBody>  
                                </MDBCard>
                                </MDBCol>

                                    {/* <div className='card-image'>
                                        <img src={product.images[0]} alt="product" />
                                    </div>
                                    <div className='card-title-description'>
                                        <h1>{product.title}</h1>
                                        <h4>{product.solution}</h4>
                                        <p>{product.description} </p>
                                    </div>
                                    {product.title} */}
                                </Link>
                            </div>
                        </Grid>
                    )}
                </Grid>
                <Pagination items={this.state.products} onChangePage={this.onChangePage} />
            </div>
        )
    }
}

export default Products;