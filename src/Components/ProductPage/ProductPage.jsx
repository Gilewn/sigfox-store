import React, { Component } from "react";
import ColumnOne from "./ProductPageColumnOne";
import ColumnTwo from "./ProductPageColumnTwo";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./ProductPage.css";

class ProductPage extends Component {
  state = {
    product: [],
    productimages: [],
    productcertifications: [],
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get(`http://localhost:5000/products/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ product: res.data });
        this.setState({ productimages: res.data.images });
        this.setState({ productcertifications: res.data.certifications });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    // return <div className="productPage-container">
    return (
      <ColumnOne
        product={this.state.product}
        album={this.state.productimages}
        certifications={this.state.productcertifications}
      />
    );

    {
      /* <ColumnTwo product={this.state.product} /> */
    }
  }
}

export default ProductPage;
