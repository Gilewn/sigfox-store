import React, { Component } from 'react';
import './ProductPage.css';
import ColumnOne from './ProductPageColumnOne';
import ColumnTwo from './ProductPageColumnTwo';
import axios from 'axios';

class ProductPage extends Component{
    
    
        state = {
        product:[],
        productimages:[],
        productcertifications:[]
    }
    componentDidMount() {
       
       
        
        
      
        axios.get(`http://localhost:5000/products/${this.props.match.params.id}`)
        .then(res => {
            
            this.setState({ product:res.data });
            this.setState({ productimages:res.data.images });
            this.setState({ productcertifications:res.data.certifications});
           console.log(this.state.product)
        
        })
        .catch(function (error) {
            console.log(error);
        });
      }

    render(){
       
        
    return <div className="productPage-container">
        <ColumnOne product={this.state.product} album = {this.state.productimages}  certifications = {this.state.productcertifications}/>
        <ColumnTwo product={this.state.product}/>
    
    </div>
}
}
export default ProductPage;