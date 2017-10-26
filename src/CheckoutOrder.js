import React, { Component } from 'react';
import './CheckoutOrder.css';
import edamame from './edamame.jpg'
import chirashi from './chirashi-sushi.jpg'
import seaweed from './seaweed-salad.jpg'

const CheckoutOrder = ({ }) => {
    const selected = [
        {
            name: 'Edamame',
            price: 4,
            count: 1,
            img: edamame
        },
        {
            name: 'Chirashi Sushi',
            price: 4,
            count: 1,
            img: chirashi
        },
        {
            name: 'Seaweed Salad',
            price: 4,
            count: 1,
            img: seaweed
        }
    ]

    const products = selected.map((product, index) => {
        return (
            <tr key={index}>
                <td>
                    <div className="cart-image-wrapper">
                        <img src={product.img} />
                    </div>
                    <span className="product-name">{product.name}</span>
                </td>
                <td>
                    <span className="k-widget k-numerictextbox">
                        <span className="k-numeric-wrap k-state-default">
                            <input type="text" className="k-formatted-value k-input"
                                value={product.count + '.00'}
                                style={{ display: 'inline-block' }} />
                        </span>
                    </span>
                </td>
                <td><p className="table-price">${product.price}.00</p></td>
            </tr>
        );
    });
    return (
        <div>
            <div id="checkout-top-image" />
            <div id="details-checkout">
                <h1>Order Details</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody className="k-widget k-listview" role="listbox">
                        {products}
                    </tbody>
                </table>
                <p id="total-checkout">
                    <em>total:</em>
                    <span>$4.00</span>
                </p>
                <a className="cancel-order" href="#">cancel order</a>
                <button className="order-now">order now!</button>
            </div>
            <div id="checkout-bottom-image" />
        </div>
    )
}

export default CheckoutOrder;