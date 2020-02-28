import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Solutions from './Components/Solutions/Solutions';
import Products from './Components/Products/Products';
import SearchBox from './Components/SearchBox/SearchBox';
import NotFound from './Components/NotFound/NotFound'
import Footer from './Components/Footer/Footer';
import ProductPage from './Components/ProductPage/ProductPage';
import Sidebar from './Components/Sidebar/Sidebar';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      searchField: "",
      navbarOpen: false,
      indexOfProduct: 0
    }
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
        console.log(this.state.products);
      })
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
    const myStyle = {
      display: 'flex'
    };

    let { searchField, products } = this.state;
    const filteredProducts = products.filter((product) => (product.title.toLowerCase().includes(searchField.toLowerCase())));

    return (
      <BrowserRouter>
        <div>
          <Navbar
            handleChange={this.handleChange}
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar} />

          <div style={myStyle}>
            <Sidebar />
            <Switch>
              <Route path="/" exact component={Solutions} />
              <Route exact path="/products" render={(props) => (
                <div>
                  <SearchBox {...props} handleChange={this.handleChange} />
                  <div className="Big-Container">
                    <Products {...props} items={filteredProducts} changeIndexOfProduct={this.ChangeIndexOfProduct} />
                  </div>
                </div>
              )} />
              <Route path={"/product/"} render={(props) => (
                <ProductPage images={this.state.products[this.state.indexOfProduct].image} />
              )}></Route>
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;