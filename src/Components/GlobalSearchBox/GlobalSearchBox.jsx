import React from 'react';

import './GlobalSearchBox.css';

function GlobalSearchBox(props) {

    function toggleWidth() {
        let a = document.querySelector('input');
        if (a.style.width === "") {
            a.style.width = "75%";
        } else {
            a.style.width = "";
        }
    }

    return (
        <div className='GlobalSearchBox'>
            <input
                type="text"
                placeholder=" Search..."
                onChange={props.handleGlobalChange}
            />
            <button onClick={toggleWidth}>
                <i className="fa fa-fw fa-search" />
            </button>
        </div>
    );
}

export default GlobalSearchBox;