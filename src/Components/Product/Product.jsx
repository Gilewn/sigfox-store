import React, {Component} from 'react';
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardItem from "@material-ui/core/CardMedia";

class Product extends Component{
    
    state = {
        id:this.props.location.state.the.id,
        title:this.props.location.state.the.title,
        excerpt:this.props.location.state.the.excerpt,
        image:this.props.location.state.the.image

    }
   
    
    render(){
    return (
      
     <div style={{position: 'relative', top: '15vh'}}>
       
       <Grid   container spacing={2} justify="center">
        <Card>
        <CardItem >
        <CardActionArea>
        <CardMedia
          component="img"
          alt="Test Product"
          height="140"
          image={this.state.image}
          title="Test Product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.state.title}
          </Typography>
          <Typography component="p">{this.state.excerpt}</Typography>
        </CardContent>
      </CardActionArea> 
      </CardItem >
      </Card>     
      </Grid>       
      </div>        
        
                
           
        
    )
};
}
export default Product;