import React from "react";
import Product from "../Product/Product";

function Products(props) {
    return (
        <div className="Big-Container">
            {props.items.map((product) =>
                <Product item={product} />
            )}
        </div>
    )
}

export default Products;