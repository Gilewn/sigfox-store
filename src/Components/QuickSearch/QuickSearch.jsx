import React from 'react';
import QuickSearchProducts from "../QuickSearchProducts/QuickSearchProducts";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './QuickSearch.css';

class QuickSearch extends React.Component {
    render() {
        const quickSearchProducts = this.props.items.map((product, index) =>
            <QuickSearchProducts
                key={index}
                id={index}
                item={product}
            />);

        return (
            <div className="QuickSearch">
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                    {quickSearchProducts}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default QuickSearch;