import React from 'react';
import './Product.css';
import {Link} from "react-router-dom";

function Product(props) {
    return <div className="card-container">
        
        <Link onClick={()=>props.changeIndex(props.id)} to={'product/' + props.id}>
        <div className='card-image'>
            <img src={props.item.image[0]} alt="product" />
        </div>
        <div className='card-title-description'>
            <h1>{props.item.title}</h1>
            <h4>{props.item.category}</h4>
            <p>{props.item.excerpt} </p>
        </div>
        </Link>
    </div>
}

export default Product;