import React, { Component } from 'react';
// import { Grid, Row, Col, Button, Image } from 'react-bootstrap';
import './Dish.css';
import { NavLink } from 'react-router-dom';

export const Dish = ({ image, name, price, addToCart, navDetails }) => {
    return (
        <div className="products">
            <NavLink className="view-details" to={'/menu/'+navDetails}>
                <image src={image} alt="plate" className="main-image" />
                <strong>{name}</strong>
                <span className="price">
                    <span>$</span>
                    <span>{price}</span>
                </span>
            </NavLink>
            <div>
                <button
                    className="add-to-cart"
                    onClick={addToCart}>
                    Add to cart
                </button>
            </div>
        </div>
    );
}