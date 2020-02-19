import React, { Component } from 'react';
import './Product.css'

function ProductCard(props) {
    return <div className="card-container">
        <div className='card-image'>
            <img src={props.item.image} alt="product" />
        </div>
        <div className='card-title-description'>
            <h1>{props.item.title}</h1>
            <h4>{props.item.category}</h4>
            <p>{props.item.excerpt} </p>
        </div>
    </div>
}

export default ProductCard;