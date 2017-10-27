import React, { Component } from 'react';
import { Order } from './Order';
import './App.css';
import { connect } from 'redux-zero/react';
import { Dish } from './Dish';
import { Body } from './body.js';
<<<<<<< HEAD
import { Grid, Row, Col } from 'react-bootstrap';
/*
class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          products.map(item => {
            return (
              <Panel header={item.dish} footer={item.price}>
                <ListGroup fill>
                  <ListGroupItem>
                    <Image src={item.image} responsive />
                  </ListGroupItem>
                  <ListGroupItem>
                    <ul>
                      {
                        Object.keys(item.nutricionalInform).map(a => {
                          const value = item.nutricionalInform[a];
                          const nutri = a.split('_');
                          if(nutri.length>1){
                            return <li>{nutri[0].charAt(0).toUpperCase()}{nutri[0].slice(1)} ({nutri[1]}):{value}</li>
                          }else{
                            return <li>{a.charAt(0).toUpperCase()}{a.slice(1)}:{value}</li>
                          }
                          
                        })
                      }
                    </ul>
                  </ListGroupItem>
                </ListGroup>
              </Panel>
            );
          })
        }
      </div>
    );
  }
=======
import DishDescription from './dishDescription.js';
import CheckoutOrder from './CheckoutOrder';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom'
>>>>>>> 3fc74eb3148ffce627c0d09b3d5c5af94b377626


const App = ({ allDish }) => {
  const dishes =
    (
      <div>
        <ul id="main" className="k-widget k-listview" role="listbox">
          {allDish.map((item, index) =>
            (<li key={index}>
              <Dish image={item.image} name={item.dish} price={item.price} addToCart="" navDetails={index + 1} />
            </li>))}
        </ul>
      </div>
    );
  const shoppingCart = allDish.filter(a => a.amount);
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
                  order={<Order shoppingCart={allDish} />}
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
//<Body component={<CheckoutOrder shoppingCart={shoppingCart} total={total} />}} />

const mapToProps = ({ allDish }) => ({ allDish });
export default connect(mapToProps)(App);
