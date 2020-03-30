import React from 'react';

import './GroupBy.css';

function GroupBy(props) {
    let allItems = props.listItems;
    let keysOfItem = [];
    const allowedValues = ['title', 'description', 'solution'];

    allItems = allItems.filter(singleItem => {
        return keysOfItem = Object.keys(singleItem);
    });

    let filteredValues = Object.values(keysOfItem)
        .filter(key => allowedValues.includes(key))
        .reduce((obj, key) => {
            obj[key] = keysOfItem[key];
            return obj;
        }, []);

    filteredValues = Object.keys(filteredValues);

    return (
        <div className="GroupBy">
            <button
                onClick={props.handleGroupBy}>
                Group by <span>Category</span>
            </button>
            <div>
                <div>
                    <h1>
                        Group by
                    </h1>
                </div>
                <div>
                    <ul>
                        {filteredValues.map((listTitle, index) =>
                            <li key={index}>
                                {listTitle.charAt(0).toUpperCase() + listTitle.slice(1)}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default GroupBy;