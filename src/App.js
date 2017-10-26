import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'redux-zero/react';
import {Dish} from './Dish';
import {Grid, Row, Col} from 'react-bootstrap';


const App = ({allDish}) => {
  return (
    <Grid>
      <Row>
        <Dish image={allDish[0].img} name={allDish[0].name} price={allDish[0].price} addToCart="" navDetails="#"/>
      </Row>
    </Grid>
  );
}


const mapToProps = ({allDish}) => ({allDish});
export default connect (mapToProps)(App);
