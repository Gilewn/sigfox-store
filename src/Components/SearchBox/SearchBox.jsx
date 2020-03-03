import React from 'react';

import './SearchBox.css';

function SearchBox(props) {

    return (
        <div className='SearchBox'>
            <input
                type="text"
                placeholder=" Search..."
                onChange={props.handleChange}
            />
        </div>
    );
}

export default SearchBox;