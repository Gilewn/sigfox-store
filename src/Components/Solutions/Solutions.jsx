import React, { Component } from 'react';
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Solutions.css";
import axios from 'axios';

class Solutions extends Component {


  state = {
    solutions:[],
    products_solutions:[]
  }


  componentDidMount() {
    

    axios.get(`http://localhost:5000/`)
      .then(res => {
        const solutions = res.data;
        this.setState({ solutions });
      })
      .catch(function (error) {
        console.log(error);
    });
    
    

    


  }

  
  render(){
  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={2} justify="center">
        {this.state.solutions.map(solution => (
          <Grid
            item xs={12} sm={6} md={3} key={solution.title}>
            <Link className='solutions' to ={ {pathname:`${solution.title}/products`}}>
              <Card style={{ height: '100%' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Test Product"
                    height="100%"
                    image={solution.image}
                  />
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" style={{ textTransform: 'none', margin: '0 auto' }}>
                    {solution.title}
                  </Button>
                </CardActions>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
} 

}

export default Solutions;