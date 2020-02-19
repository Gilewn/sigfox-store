import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Solutions from './Components/Solutions/Solutions';
import Products from './Components/Products/Products';
import TestProducts from './Components/Products/Test-Products';
import SearchBox from './Components/SearchBox/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: TestProducts,
      searchField: "",
      navbarOpen: false
    }
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    const myStyle = {
      display: 'flex'
    };

    let {searchField,products}=this.state;
    const filteredProducts=products.filter((product)=>(product.title.toLowerCase().includes(searchField.toLowerCase())));
    console.log(filteredProducts);

    return (
      <BrowserRouter>
        <div>
          <Navbar
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar} />
          <div style={myStyle}>
            <Sidebar />
            <SearchBox handleChange={this.handleChange}/>
            <Products items={filteredProducts}/>
            <Switch>
              <Route path="/" exact component={Solutions} />
              {/* <Route exact path="/products" render = {(props) => (
                <Products items = {props.match.params.items}/>
                
              )} /> */}
              {/* <Route path = "/product/:id"  component={Product}/> 
                <Route path="*" component={NotFound} /> */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
