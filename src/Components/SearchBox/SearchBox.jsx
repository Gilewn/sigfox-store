import React from 'react';
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import './SearchBox.css';


function SearchBox(props) {

    // Products.filter((product)=>(product.toLowerCase()===props.search));

    return (
        <div className='SearchBox'>
            <input type="text" placeholder="search product" onChange={props.handleChange}></input>
        </div>
    );
}

export default SearchBox;



// export default SearchBox;

