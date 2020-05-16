import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import QuickSearch from "./Components/QuickSearch/QuickSearch";
import { Switch, Route, withRouter } from "react-router-dom";
import Solutions from "./Components/Solutions/Solutions";
import Products from "./Components/Products/Products";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import ProductPage from "./Components/ProductPage/ProductPage";
import Sidebar from "./Components/Sidebar/Sidebar";
import GlobalSearchBox from "./Components/GlobalSearchBox/GlobalSearchBox";
import LogIn from "./Components/Auth/LogIn";
import BackToTop from "react-back-to-top-button";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Redirect } from 'react-router-dom'
import AdminPanel from "./Components/Admin/Adminpanel"
import "./App.css";


class App extends Component {
  state = {
    products: [],
    globalSearchField: "",
    navbarOpen: false,
    solutions: [],
    currentUser: undefined
  };
  
  
  componentDidMount() {
    
  

    window.scrollTo({ top: 0, behavior: "smooth" });
    axios
      .get(`http://localhost:5000/solutions`)
      .then((res) => {
        
        const solutions = res.data;
        this.setState({ solutions });
        
      })

      .catch(function (error) {
        console.log(error);
      });
    axios
      .get(`http://localhost:5000/products`)
      .then((res) => {
       
        const products = res.data;
        this.setState({ products });
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  

  handleGlobalChange = (e) => {
    this.setState({ globalSearchField: e.target.value });
  };

  closeSearchField = () => {
    this.setState({ globalSearchField: "" });
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

 


 


  render() {

    window.onbeforeunload = function() {
      localStorage.clear();
   }
    
    

    
    
    let { globalSearchField, products } = this.state;
    const globalFilteredProducts = products.filter((product) =>
      product.solution.toLowerCase().includes(globalSearchField.toLowerCase())
    );

    let quickSearch = null;

    if (globalSearchField.length > 0 && globalFilteredProducts.length > 0) {
      quickSearch = (
        <QuickSearch
          items={globalFilteredProducts}
          handleGlobalChange={this.handleGlobalChange}
        />
      );
    }
    
    let routes = (
      <div>
        <BackToTop showAt={50} speed={1500} easing="easeInOutQuint">
          <span className="Span-Style">
            <svg
              className="svg-inline--fa fa-angle-double-up fa-w-10"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="angle-double-up"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"
              ></path>
            </svg>
          </span>
        </BackToTop>
        <div onClick={this.closeSearchField}>
          <Navbar
            handleGlobalChange={this.handleGlobalChange}
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar}
          />
          <GlobalSearchBox handleGlobalChange={this.handleGlobalChange} />
          <div className="App">
            <Sidebar items={this.state.solutions} />
            {quickSearch}
            <div className="Fullwidth">
              <Switch>
            
                <Route exact path="/">
                  <Solutions items={this.state.solutions} />
                </Route>
                <Route
                  exact
                  path="/All_products"
                  render={(props) => (
                    <div>
                      <div className="Big-Container">
                        <Products {...props} />
                      </div>
                    </div>
                  )}
                />
                <Route
                  path="/:solution_title/products"
                  render={(props) => (
                    <div>
                      <div className="Big-Container">
                        <Products {...props} />
                      </div>
                    </div>
                  )}
                ></Route>
                <Route
                  path={"/:id"}
                  render={(props) => (
                    <div style={{ width: "100%" }}>
                      <ProductPage {...props} />
                      <Helmet>
                        <style type="text/css">
                          {`
                        nav {
                            display: none
                        }
                    `}
                        </style>
                      </Helmet>
                    </div>
                  )}
                ></Route>
                <Route path="*" component={NotFound} />
              
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
   
   

    if (
      this.props.location.pathname === "/sigfox-store-admin-sgfx" ||
      this.props.location.pathname === "/adminpanel"
    ) {
      routes = (
        <Switch>
          <Route path="/sigfox-store-admin-sgfx" component={LogIn} />
          
         <Route
            path="/adminpanel"
            component={AdminPanel}
            
          />
           
            
        </Switch>
      );
    }

    return <div>{routes}</div>;
  }
}

export default withRouter(App);
