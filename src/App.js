import React, { Component } from 'react';
import { Order } from './Order';
import './App.css';
import { connect } from 'redux-zero/react';
import { Dish } from './Dish';
import { Body } from './body.js';
import DishDescription from './dishDescription.js';
import CheckoutOrder from './CheckoutOrder';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';


const App = ({ allDish, shoppingCart }) => {
  const dishes =
    (
      <div>
        <ul id="main" className="k-widget k-listview" role="listbox">
          {allDish.map((item, index) =>
            (<li key={index}>
              <Dish image={item.image} name={item.dish} price={item.price} index={index} navDetails={index + 1} />
            </li>))}
        </ul>
      </div>
    );
  const total = shoppingCart.reduce(((total, item) => total + item.price * item.amount), 0);
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" render={() =>
            <Body component={dishes}
              order={<Order shoppingCart={shoppingCart} total={total} />}
              shoppingCart={shoppingCart} />}
          />
          {
            allDish.map((item, index) => {
              const path = "/menu/" + (index + 1);
              return <Route path={path} render={() =>
                <Body component={<DishDescription dish={allDish[index]} index={index + 1} />}
                  order={<Order shoppingCart={shoppingCart} total={total} />}
                  shoppingCart={shoppingCart} />}
              />
            })
          }
          <Route exact path="/checkout" render={() =>
            <Body component={<CheckoutOrder shoppingCart={shoppingCart} total={total} />}
              shoppingCart={shoppingCart} />}
          />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </BrowserRouter>


  );
}

const mapToProps = ({ allDish, shoppingCart }) => ({ allDish, shoppingCart });
export default connect(mapToProps)(App);
