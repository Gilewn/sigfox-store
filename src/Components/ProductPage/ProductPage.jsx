import React from 'react';


function ProductPage(props) {
    return <div>
        {console.log(props.item)}
        <img src={props.item.image} alt="productPhoto" />
    </div>
}

export default ProductPage;