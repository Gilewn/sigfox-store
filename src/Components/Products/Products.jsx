import React,{ Component } from "react";
import SearchBox from '../SearchBox/SearchBox';
import GroupBy from '../GroupBy/GroupBy';
import Pagination from '../Pagination/Pagination';
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from 'axios';
import './Products.css';

class Products extends Component{
    
    
    state = {
        products : []
       
    }
    componentDidMount(){
      
    if (typeof this.props.match.params.solution_title === 'undefined') {
        axios.get(`http://localhost:5000/products`)
        .then(res => {
        
            
            this.setState({ products:res.data });
        })
        .catch(function (error) {
          console.log(error);
        });
    
    }else{
        axios.get(`http://localhost:5000/${this.props.match.params.solution_title}/products`)
        .then(res => {
          
            
            this.setState({ products:res.data });
       
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  
    }
  

   render(){ 

   console.log(this.state.products)
    
    
    return (
        <div className="Products">
           <div className="UtilityBar">
                <SearchBox handleChange={this.props.handleChange} />
                <GroupBy handleGroupBy={this.props.handleGroupBy} />
            </div>
            <Grid container spacing={2} justify="center">
                {this.state.products.map((product, index) =>
                    <Grid
                        item xs={12} sm={6} md={3} key={product._id}>
                        <div className="card-container">
                            <Link to={{ pathname: `/${product._id}` }}>
                                <div className='card-image'>
                                    <img src={product.images[0]} alt="product" />
                                </div>
                                <div className='card-title-description'>
                                    <h1>{product.title}</h1>
                                    <h4>{product.solution}</h4>
                                    <p>{product.description} </p>
                                </div>
                                {product.title}
                            </Link>
                        </div>
                    </Grid>
                )}
            </Grid>
            <Pagination items={this.props.paginationItems} onChangePage={this.props.onChangePage} />
           
        </div>
    )
}
}
export default Products;