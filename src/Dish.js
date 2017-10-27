import React, { Component } from 'react';
// import { Grid, Row, Col, Button, Image } from 'react-bootstrap';
import './Dish.css';
import { NavLink } from 'react-router-dom';
import arrow from './images/arrow-right.png'
import {addToCart} from './Actions.js'

export const Dish = ({ image, name, price, index, navDetails }) => {
    return (
        <div className="products">
            <NavLink className="view-details" to={'/menu/'+ navDetails}>
                <Image src={image} alt="plate" className="main-image" />
                <Image src={arrow} alt="plate" className="hide" />
                <strong>{name}</strong>
                <span className="price">
                    <span>$</span>
                    <span>{price}</span>
                </span>
            </NavLink>
            <div>
                <button
                    className="add-to-cart"
                    onClick={() => addToCart(index)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
}