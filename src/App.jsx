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
    globalSearchField: "",
    navbarOpen: false,
    showGroubByCategory: false,
    solutions: [],
    filteredProducts: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/`)
      .then(res => {
        const solutions = res.data;
        this.setState({ solutions });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleGlobalChange = (e) => {
    this.setState({ globalSearchField: e.target.value });
  }

  closeSearchField = () => {
    this.setState({ globalSearchField: "" });
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  handleGroupBy = () => {
    this.setState({ showGroubByCategory: !this.state.showGroubByCategory });
  }

  render() {
    let { globalSearchField, searchField, products } = this.state;
    const filteredProducts = products.filter((product) => (product.solution.toLowerCase().includes(searchField.toLowerCase())));
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
        handleChange={this.handleChange}
      />;
    }

    if (this.state.showGroubByCategory) {
      let finalArray = [];
      if (filteredProducts.length !== 0) {
        finalArray = groupByCategoryToArray[0].concat(groupByCategoryToArray[1]);
      }
      products = <Route exact path="/products" render={(props) => (
        <div>
          <div className="Big-Container">
            <Products
              {...props}
              items={finalArray}
              handleGroupBy={this.handleGroupBy} />
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
              handleGroupBy={this.handleGroupBy} />
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
            <Sidebar items={this.state.solutions} />
            {quickSearch}
            <div className="Fullwidth">
              <Switch>
                <Route exact path="/" >
                  <Solutions items={this.state.solutions} />
                </Route>
                {products}
                <Route path="/:solution_title/products" render={(props) => (
                  <div>
                    <div className="Big-Container">
                      <Products {...props} />
                    </div>
                  </div>
                )} ></Route>
                <Route path={"/:id"} render={(props) => (
                  <div style={{ width: '100%' }}>
                    <ProductPage  {...props} />
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