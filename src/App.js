import React, { Component } from 'react';
//import './App.css';
import './body.css';
import products from './data';
//import { Panel, Image, ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'redux-zero/react';
import { Dish } from './Dish';
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

*/

const App = ({ allDish }) => {
  return (
    <div id="application">
      <div>
        <div id="wrapper">
          <div id="header">
            <h1 className="logo"><a href="#/"></a></h1>
            <a id="cart-info" href="#">Shopping Cart<span><span data-bind="text: cart.contentsCount"></span> items</span></a>
          </div>
          <p data-bind="visible: cart.cleared" >Thank you for your order!</p>
          <div id="main-section">
            <section id="pre-content">
              <div>
                <div id="shop-info" data-bind="attr:{className: cartContentsClass}" className="empty">

                </div>
              </div>

            </section>
            <section id="content">
              <div>
                <ul data-role="listview" data-bind="source:items" data-template="item" id="main" className="k-widget k-listview" role="listbox">
                  {
                    allDish.map(item => <li><Dish image={item.image} name={item.dish} price={item.price} addToCart="" navDetails="#" /></li>)
                  }
                </ul>
              </div>

            </section>

          </div>
          <div id="footer">
            <p>"Learn more about Kendo UI"
                <sup>®</sup>
              "SPA at"
                <a href="http://docs.telerik.com/kendo-ui/getting-started/framework/spa/overview">docs.telerik.com/kendo-ui</a>
              "."
                </p>

            <p>Copyright © 2017, Progress Software Corporation and/or its subsidiaries or affiliates. All Rights Reserved.</p>
          </div>
        </div>

      </div>
    </div>
  );
}


const mapToProps = ({ allDish }) => ({ allDish });
export default connect(mapToProps)(App);
