import React, { Component } from 'react';
import './App.css';
import { connect } from 'redux-zero/react';
import { Dish } from './Dish';
import { Body } from './body.js';
import DishDescription from './dishDescription.js';
import CheckoutOrder from './CheckoutOrder';

const App = ({ allDish }) => {
  const dishes = 
  (<ul id="main" className="k-widget k-listview" role="listbox">
    {allDish.map(item =>
      (<li><Dish image={item.image} name={item.dish} price={item.price} addToCart="" navDetails="#" /></li>))}
  </ul>);
  return (
    <div>
      <Body component={<CheckoutOrder/>} />
    </div>
  );
}


const mapToProps = ({ allDish }) => ({ allDish });
export default connect(mapToProps)(App);
