import React from 'react';
import QuickSearchProducts from "../QuickSearchProducts/QuickSearchProducts";

import './QuickSearch.css';

const QuickSearch = (props) => {
    return (
        <div className="QuickSearch">
            {props.items.map((product, index) =>
                <QuickSearchProducts key={index} changeIndex={props.changeIndexOfProduct} id={index} item={product} />
            )}
        </div>
    )
}

export default QuickSearch;