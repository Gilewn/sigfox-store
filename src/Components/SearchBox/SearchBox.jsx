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
            <i className="fa fa-fw fa-search" />
        </div>
    );
}

export default SearchBox;