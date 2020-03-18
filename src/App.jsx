import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import QuickSearch from './Components/QuickSearch/QuickSearch';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Solutions from './Components/Solutions/Solutions';
import Products from './Components/Products/Products';
import NotFound from './Components/NotFound/NotFound'
import Footer from './Components/Footer/Footer';
import ProductPage from './Components/ProductPage/ProductPage';
import Sidebar from './Components/Sidebar/Sidebar';
import axios from 'axios';
import { Helmet } from "react-helmet";

import './App.css';

class App extends Component {
  state = {
    products: [],
    searchField: "",
    globalSearchField: "",
    navbarOpen: false,
    indexOfProduct: -1,
    showGroubByCategory: false,
    exampleItems: [...Array(150).keys()].map(i => ({ id: (i + 1), name: 'Item ' + (i + 1) })),
    pageOfItems: []
  }

  onChangePage = this.onChangePage.bind(this);

  InitialIndexOfProduct = (index) => {
    this.setState({
      indexOfProduct: index
    })
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/products`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }

  handleGlobalChange = (e) => {
    this.setState({ globalSearchField: e.target.value });
  }

  closeSearchField = () => {
    this.setState({ globalSearchField: "" });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  ChangeIndexOfProduct = (index) => {
    this.setState({
      indexOfProduct: index
    });
  }

  handleGroupBy = () => {
    this.setState({ showGroubByCategory: !this.state.showGroubByCategory });
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    let { globalSearchField, searchField, products } = this.state;
    const filteredProducts = products.filter((product) => (product.title.toLowerCase().includes(searchField.toLowerCase())));
    const globalFilteredProducts = products.filter((product) => (product.title.toLowerCase().includes(globalSearchField.toLowerCase())));
    const groupByCategory = filteredProducts.reduce((r, a) => {
      r[a.solution] = [...r[a.solution] || [], a];
      return r;
    }, {});

    let groupByCategoryToArray = Object.values(groupByCategory);

    let quickSearch = null;

    if (globalSearchField.length > 0 && filteredProducts.length > 0) {
      quickSearch = <QuickSearch
        items={globalFilteredProducts}
        {...this.props}
        handleChange={this.handleChange}
        changeIndexOfProduct={this.ChangeIndexOfProduct}
      />;
    }

    if (this.state.showGroubByCategory) {
      let finalArray = [];
      if (filteredProducts.length != 0) {
        finalArray = groupByCategoryToArray[0].concat(groupByCategoryToArray[1]);
      }
      products = <Route exact path="/products" render={(props) => (
        <div>
          <div className="Big-Container">
            <Products
              {...props}
              items={finalArray}
              pageOfItems={this.state.pageOfItems}
              exampleItems={this.state.exampleItems}
              handleGroupBy={this.handleGroupBy}
              onChangePage={this.onChangePage}
              handleChange={this.handleChange}
              changeIndexOfProduct={this.ChangeIndexOfProduct} />
          </div>
        </div>
      )} />
    }

    if (!this.state.showGroubByCategory) {
      products = <Route exact path="/products" render={(props) => (
        <div>
          <div className="Big-Container">
            <Products
              {...props}
              items={filteredProducts}
              pageOfItems={this.state.pageOfItems}
              exampleItems={this.state.exampleItems}
              handleGroupBy={this.handleGroupBy}
              onChangePage={this.onChangePage}
              handleChange={this.handleChange}
              changeIndexOfProduct={this.ChangeIndexOfProduct} />
          </div>
        </div>
      )} />
    }

    return (
      <BrowserRouter>
        <div onClick={this.closeSearchField}>
          <Navbar
            handleGlobalChange={this.handleGlobalChange}
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar} />
          <div className="App">
            <Sidebar />
            {quickSearch}
            <div className="Fullwidth">
              <Switch>
                <Route path="/" exact component={Solutions} />
                {products}
                <Route path={"/product/"} render={(props) => (
                  <div style={{ width: '100%' }}>
                    <ProductPage product={this.state.products[this.state.indexOfProduct]} />
                    <Helmet>
                      <style type="text/css">{`
                        nav {
                            display: none
                        }
                    `}
                      </style>
                    </Helmet>
                  </div>
                )}></Route>
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;