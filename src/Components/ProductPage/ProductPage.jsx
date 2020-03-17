import React, { Component } from 'react';
import './ProductPage.css';
import ColumnOne from './ProductPageColumnOne';
import ColumnTwo from './ProductPageColumnTwo';
import axios from 'axios';

class ProductPage extends Component{

     state = {
        product:[]
    }
    componentWillMount() {
        var id= window.location.href.split('/').reverse()[0]
       
        console.log(id);
        
      
        axios.get(`http://localhost:5000/product/${id}`)
        .then(res => {
            const product = res.data;
            this.setState({ product });
           console.log(this.state.product)
        
        }) }

    render(){
        
    return <div className="productPage-container">

   
    <ColumnTwo product={this.state.product} />
    </div>
}
}
export default ProductPage;