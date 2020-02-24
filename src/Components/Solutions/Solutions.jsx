import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import solutions from "./Test-Solutions";
import {Link} from 'react-router-dom'
import styled from "styled-components";

function Solutions (props) {
    

        return (
          <div style={{ marginTop: 20, padding: 30 }}>
            <Grid container spacing={2} justify="center">
              {solutions.map(solution => (
              <CardItem>
                <Grid
                
                  item key={solution.title}>
                <Link to = { {pathname:`/products`} }>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Test Product"
                        height="140"
                        image={solution.image}
                        title="Test Product"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {solution.title}
                        </Typography>
                        <Typography component="p">{solution.excerpt}</Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
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

export default Solutions;

const CardItem = styled.div`
width: 35%;
text-align: center;
margin-left: 5%;
margin-right: -3%;
margin-bottom: 3%;


`;