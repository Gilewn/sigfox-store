import React from "react";

import Product from "../Product/Product";
import './Products.css';
<<<<<<< HEAD

=======
>>>>>>> 1dd8d5af9608839148e1d6cb9090bc181a882f73

  function Products(props) {
    
    return (
        
        <div className="Big-Container">
            {props.items.map((product,index) =>
                <Product key={index} changeIndex={props.changeIndexOfProduct} id={index} item={product} />
            )}
        </div>
<<<<<<< HEAD
       
    )
}
=======
        
      );
  }

/*const CardItem = styled.div`
width: 35%;
text-align: center;
margin-left: 5%;
margin-right: -3%;
margin-bottom: 3%;

`;*/



>>>>>>> 1dd8d5af9608839148e1d6cb9090bc181a882f73

export default Products;