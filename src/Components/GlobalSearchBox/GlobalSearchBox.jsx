import React from 'react';

import './GlobalSearchBox.css';

function SearchBox(props) {
    return (
        <div className='GlobalSearchBox'>
            <input
                type="text"
                placeholder=" Search..."
                onKeyUp={props.handleSearch}
            />
        </div>
    );
}

export default SearchBox;