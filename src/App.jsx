import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Solutions from './Components/Solutions/Solutions';
import Products from './Components/Products/Products';
import TestProducts from './Components/Products/Test-Products';
import SearchBox from './Components/SearchBox/SearchBox';
import ProductPage from './Components/ProductPage/ProductPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: TestProducts,
      searchField: "",
      navbarOpen: false,
      indexOfProduct: -1
    }
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
    console.log(filteredProducts);

    return (
      <BrowserRouter>
        <div>
            <Navbar
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

              <Route path={"/product/" + this.state.indexOfProduct} render={(props) => (
                <ProductPage {...props} item={this.state.products[this.state.indexOfProduct]} />
              )}></Route>

            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
