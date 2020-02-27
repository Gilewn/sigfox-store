import React from 'react';
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import './SearchBox.css';


function SearchBox(props) {

    // Products.filter((product)=>(product.toLowerCase()===props.search));

    return (
<<<<<<< HEAD
        <div className='SearchBox'>
=======
        <div style={{ margin: '20px', textAlign: 'center' }}>
>>>>>>> 1dd8d5af9608839148e1d6cb9090bc181a882f73
            <input type="text" placeholder="search product" onChange={props.handleChange}></input>
        </div>
    );
}

export default SearchBox;



// export default SearchBox;

