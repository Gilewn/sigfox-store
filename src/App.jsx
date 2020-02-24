import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Solutions from './Components/Solutions/Solutions';
import Products from './Components/Products/Products';
import Product from './Components/Product/Product';
import NotFound from './Components/NotFound/NotFound';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navbarOpen: false,
      
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


   

    return (
      <BrowserRouter>
        <div>
            <Navbar
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar} />
          
          <div style={myStyle}>
            <Sidebar />
            
            <Switch>
              <Route exact path="/" component={Solutions} />
              <Route exact path="/products"  component= {Products}/>
              <Route exact path = "/product/:id"  component={Product}/> 
              <Route path = "*"  component={NotFound}/> 
              
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
