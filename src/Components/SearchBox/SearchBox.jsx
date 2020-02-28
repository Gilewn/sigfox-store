import React from 'react';

import './SearchBox.css';

function SearchBox(props) {

    return (
        <div className='SearchBox'>
            <input type="text" placeholder=" Search for components, devices or solutions" onChange={props.handleChange}></input>
        </div>
    );
}

export default SearchBox;