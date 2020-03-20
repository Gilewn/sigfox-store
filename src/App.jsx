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
    navbarOpen: false,
    solutionproducts: []
  }
  

 
  componentDidMount() {
    axios.get(`http://localhost:5000/products`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
      .catch(function (error) {
        console.log(error);
    });
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
                <Route exact path=":/products" render={(props) => (
                  <div>
                    <div className="Big-Container">
                      <Products {...props} items={filteredProducts} handleChange={this.handleChange} />
                    </div>
                  </div>
                )} ></Route>


             
                <Route  path="/:solution_title/products" render={(props) => (
                  <div>
                    <div className="Big-Container">
                      <Products {...props} items={filteredProducts} handleChange={this.handleChange} />
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