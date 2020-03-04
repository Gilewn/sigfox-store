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

import './App.css';

class App extends Component {
  state = {
    products: [],
    searchField: "",
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
    this.setState({ searchField: e.target.value })
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
    let { searchField, products } = this.state;
    const filteredProducts = products.filter((product) => (product.title.toLowerCase().includes(searchField.toLowerCase())));

    let quickSearch = null;

    if (searchField.length > 0 && filteredProducts.length > 0) {
      quickSearch = <QuickSearch
        items={filteredProducts}
        {...this.props} />;
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
                  <ProductPage index={this.InitialIndexOfProduct} images={this.state.products[this.state.indexOfProduct].image} />
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