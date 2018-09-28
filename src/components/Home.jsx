import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (

      <Grid>
        <Jumbotron>

          <h2> Hello, Welcome to React Bootstrap! </h2>
          <p> Trying to build something using React Bootstrap </p>

        </Jumbotron>

        <Link to = '/about'>
          <Button bsStyle="primary"> About </Button>
        </Link>
      </Grid>

    );
  }
}

export default Home;
