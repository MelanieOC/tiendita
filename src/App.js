import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'redux-zero/react';
import './App.css';
import DishDescription from './dishDescription.js';

const App = ({ food }) => {
 
    return (
      <div className="App">
        <DishDescription/>
      </div>
    );
}
const mapToProps = ({food}) => ({food});
export default connect(mapToProps)(App);
