import React from "react";
import { Grid, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import products from "./Test-Products";
import {Link} from 'react-router-dom'
import styled from "styled-components";
import Product from "../Product/Product";
import './Products.css';

  function Products(props) {
    
    return (
        <div className="Big-Container">
            {props.items.map((product,index) =>
                <Product key={index} changeIndex={props.changeIndexOfProduct} id={index} item={product} />
            )}
        </div>
        
      );
  }

const CardItem = styled.div`
width: 35%;
text-align: center;
margin-left: 5%;
margin-right: -3%;
margin-bottom: 3%;

`;




export default Products;