import React from 'react';

import './GlobalSearchBox.css';

function SearchBox(props) {
    return (
        <div className='GlobalSearchBox'>
            <input
                type="text"
                placeholder=" Search..."
                onChange={props.handleGlobalChange}
            />
        </div>
    );
}

export default SearchBox;