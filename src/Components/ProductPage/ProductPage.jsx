import React from 'react';
import './ProductPage.css';
import ColumnOne from './ProductPageColumnOne';
import ColumnTwo from './ProductPageColumnTwo';


function ProductPage(props){
    // return <div>
    //     {console.log(props.item)}
    //     <img src={props.item.image} alt="photo"/>
    // </div>


    return <div className="container">
        <ColumnOne album={props.images}/>
        <ColumnTwo/>
    </div>
}

export default ProductPage;