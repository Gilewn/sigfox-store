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

  function Products(props) {
    
    return (
    
        <div style={{ position: 'relative', top: '15vh' }}>
          <Grid container spacing={2} justify="center"  >
          
            {products.map(product => (
              <CardItem key ={product.id}>
              <Grid >
              <Link to = {{ pathname:`/product/${product.id}` , state: {the:product}}}> 
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Test Product"
                      height="140"
                      image={product.image}
                      title="Test Product"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.title}
                      </Typography>
                      <Typography component="p">{product.excerpt}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                  <Link to = {{ pathname:`/product/${product.id}` , state: {the:product}}}>Learn More</Link> 
                  </CardActions>
                  </Card>
                  </Link> 
              </Grid> 
              </CardItem>
          
            ))}
          </Grid>
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