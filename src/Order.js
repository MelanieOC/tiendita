import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import remove from './images/remove-icon.png';
import './Order.css';
import { emptyCart, removeDish } from './Actions.js';

export const Order = ({ shoppingCart, total }) => {
    return (
        <div>
            {
                total &&
                <div id="shop-info">
                    <ul id="shop-list" className="k-widget k-listview" role="listbox">
                        {
                            shoppingCart.map(item => {
                                return (
                                    <li className="selected-products-list" role="option" aria-selected="false">
                                        <div className="selected-product" onClick={() => removeDish(item)}>
                                            <a className="view-selected-items">
                                                <img src={item.image} heigth="100" width="100" />
                                            </a>
                                            <img src={remove} className='oculto' />
                                        </div>

                                        <span className="selected-image-price"><span>{item.amount}</span>x<span>${item.price.toFixed(2)}</span></span>
                                    </li>
                                );
                            })
                        }

                    </ul>

                    <div id="shopping-cart">
                        <h3>your<br />shopping cart</h3>
                        <p className="total-price" >$ {total}</p>
                        <a id="empty-cart" href="#" onClick={() => { emptyCart() }} >empty cart</a>
                        <NavLink id="checkout" to="/checkout">checkout</NavLink>
                    </div>
                </div>
            }
        </div>
    );
}


