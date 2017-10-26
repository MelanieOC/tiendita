import React, { Component } from 'react';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';
import './Dish.css';

export const Dish = ({image, name, price, addToCart, navDetails}) => {
    return (
        <Row className="products">
            <a className="view-details" href={navDetails}>
                <Image src={image} alt="plate" className="main-image"/>
                <strong>{name}</strong>
                <span className="price">
                    <span>$</span>
                    <span>{price}</span>
                </span>
            </a>
            <div>
                <Button 
                    className="add-to-cart" 
                    onClick={addToCart}>
                    Add to cart
                </Button>
            </div>
        </Row>
    );
}