import React from 'react';
import { Link } from "react-router-dom";

import './Product.css';

function Product(props) {
    return <div className="card-container">
        <Link onClick={() => props.changeIndex(props.id)} to={'product/' + props.id}>
            <div className='card-image'>
                <img src={props.item.images[0]} alt="product" />
            </div>
            <div className='card-title-description'>
                <h1>{props.item.title}</h1>
                <h4>{props.item.solution}</h4>
                <p>{props.item.description} </p>
            </div>
        </Link>
    </div>
}

export default Product;