import React from 'react';


function SearchBox(props){

    // Products.filter((product)=>(product.toLowerCase()===props.search));

    return (
        <div style={{margin:'20px'},{textAlign:'center'}}>
            <input type="text" placeholder="search product" onChange={props.handleChange}></input>
        </div>
        )
        
}

export default SearchBox;