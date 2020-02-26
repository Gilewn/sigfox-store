import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import solutions from "./Test-Solutions";
import "./Solutions.css";
import styled from "styled-components";

function Solutions(props) {
  const cardItem = {
    width: '20vw'
  };

  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={2} justify="center">
        {solutions.map(solution => (
          <Grid
            style={cardItem}
            item key={solution.title}>
            <Link className='solutions' to="/products">
              <Card style={{ height: '100%' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Test Product"
                    height="100%"
                    image={solution.image}
                    title="Test Product"
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

export default Solutions;

const CardItem = styled.div`
width: 35%;
text-align: center;
margin-left: 5%;
margin-right: -3%;
margin-bottom: 3%;


`;