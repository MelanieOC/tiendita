import React, { Component } from 'react';
// import {} from './actions';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';

import './Order.css';

export const Order = ({price ,cant ,quantity ,image }) => {
      return (
            <Row id="pre-content">
                <div><div id="shop-info">
                <ul id="shop-list" className="k-widget k-listview" role="listbox">
                     <li className="selected-products-list"  role="option" aria-selected="false">
                <a className="view-selected-items"><Image src="http://www.isp.edu.pe/wp-content/uploads/2017/08/sushi-featured.jpg" heigth= "190" width="190"/></a>
                <span className="selected-image-price"><span>1</span>x<span>$12.00</span></span>
            </li>
        </ul>

                <div id="shopping-cart">
                    <h3>your<br/>shopping cart</h3>
                    <p className="total-price" >$ {quantity}</p>
                    <a id="empty-cart" href="#" >empty cart</a><a id="checkout" href="#/checkout">checkout</a>
                </div>
            </div>
        </div>
    </Row>
      );
  }


