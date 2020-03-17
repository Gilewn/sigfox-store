import React from 'react';

import './GroupBy.css';

function GroupBy(props) {
    return (
        <div className="GroupBy">
            <button
                onClick={props.handleGroupBy}>
                Group by <span>Category</span>
            </button>
        </div>
    );
}

export default GroupBy;