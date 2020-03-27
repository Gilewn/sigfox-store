import React, { Component } from 'react';
import ColumnOne from './ProductPageColumnOne';
import ColumnTwo from './ProductPageColumnTwo';
import axios from 'axios';

import './ProductPage.css';

class ProductPage extends Component {
    state = {
        product: [],
        productimages: [],
        productcertifications: []
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/products/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data)
                this.setState({ product: res.data });
                this.setState({ productimages: res.data.images });
                this.setState({ productcertifications: res.data.certifications });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return <div className="productPage-container">
            <ColumnOne product={this.state.product} album={this.state.productimages} certifications={this.state.productcertifications} />
            <ColumnTwo product={this.state.product} />
        </div>
    }
}

export default ProductPage;