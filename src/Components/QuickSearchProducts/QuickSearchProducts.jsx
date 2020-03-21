import React from 'react';
import { Link } from "react-router-dom";

import './QuickSearchProducts.css';

const QuickSearchProducts = (props) => {
    return (
        <div className="card-container">
            <Link to={{ pathname: `/${props.item._id}` }}>
                <div className='card-image'>
                    <img src={props.item.images[0]} alt="product" />
                </div>
                <div className='card-title-description'>
                    <h1>{props.item.title}</h1>
                    <h1>{props.item.solution}</h1>
                </div>
            </Link>
        </div>
    )
}

export default QuickSearchProducts;