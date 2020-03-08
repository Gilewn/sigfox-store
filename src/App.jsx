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
    indexOfProduct: -1
  }

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
    this.setState({ globalSearchField: e.target.value })
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  ChangeIndexOfProduct = (index) => {
    this.setState({
      indexOfProduct: index
    })
  }

  render() {
    let { globalSearchField, searchField, products } = this.state;
    const filteredProducts = products.filter((product) => (product.title.toLowerCase().includes(searchField.toLowerCase())));
    const globalFilteredProducts = products.filter((product) => (product.title.toLowerCase().includes(globalSearchField.toLowerCase())));

    let quickSearch = null;

    if (globalSearchField.length > 0 && filteredProducts.length > 0) {
      quickSearch = <QuickSearch
        items={globalFilteredProducts}
        {...this.props}
        handleChange={this.handleChange}
        changeIndexOfProduct={this.ChangeIndexOfProduct} />;
    }

    return (
      <BrowserRouter>
        <div>
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
                <Route exact path="/products" render={(props) => (
                  <div>
                    <div className="Big-Container">
                      <Products {...props} items={filteredProducts} handleChange={this.handleChange} changeIndexOfProduct={this.ChangeIndexOfProduct} />
                    </div>
                  </div>
                )} />
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