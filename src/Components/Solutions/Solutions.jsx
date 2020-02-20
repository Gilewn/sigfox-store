import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import solutions from "./Test-Solutions";

function Solutions (props) {
    const cardItem = {
        width: '20vw'
    };

  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={2} justify="center">
        {solutions.map(solution => (
          <Grid
            style={ cardItem }
            item key={solution.title}>
            <Card style={{height: '25vh'}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Test Product"
                  height="100vh"
                  image={solution.image}
                  title="Test Product"
                />
                <CardContent style={{ position: 'absolute', padding: '0px 5px', top: '0.5%', color: '#fff', textShadow: '1px 2px 2px #656565'}}>
                  <Typography gutterBottom variant="h4" component="h2" style={{ fontSize: '26px'}}>
                    {solution.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" style={{ textTransform: 'none', margin: '0 auto'}}>
                  Available Products
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Solutions;