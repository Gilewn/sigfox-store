import React from 'react';

import './GroupBy.css';

function GroupBy(props) {
    let allItems = props.listItems;
    let keysOfItem = [];
    let orderSymbol = "";
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

    if (!props.showGroubByOrder) {
        orderSymbol = '⮝';
    } else {
        orderSymbol = '⮟';
    }

    return (
        <div className="GroupBy">
            <div className="dropdown">
                <div className="dropdown-header-holder">
                    <h1 className="dropdown-header">
                        Group by
                    </h1>
                    <span>
                        &#10149;
                    </span>
                </div>
                <div className="dropdown-list-holder">
                    <ul className="dropdown-list">
                        {filteredValues.map((listTitle, index) =>
                            <li
                                className="dropdown-list-item"
                                key={index}>
                                <a
                                    onClick={() => props.handleGroupBy(listTitle)}
                                    className="dropdown-list-item-anchor">
                                    <text>
                                        {listTitle.charAt(0).toUpperCase() + listTitle.slice(1)}
                                    </text>
                                    <span>
                                        {orderSymbol}
                                    </span>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default GroupBy;