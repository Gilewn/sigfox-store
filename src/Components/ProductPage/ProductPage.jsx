import React from 'react';
import './ProductPage.css';
import ColumnOne from './ProductPageColumnOne';
import ColumnTwo from './ProductPageColumnTwo';


function ProductPage(props){
    // return <div>
    //     {console.log(props.item)}
    //     <img src={props.item.image} alt="photo"/>
    // </div>


    return <div className="productPage-container">
        <ColumnOne product={props.product} album={props.product.images} generalDetails={props.text} certificates={props.certificates}/>
        <ColumnTwo product={props.product}/>
    </div>
}

export default ProductPage;