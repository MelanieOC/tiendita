import React, { Component } from 'react';
import './CheckoutOrder.css';

const CheckoutOrder = ({ shoppingCart, total }) => {
    const products = shoppingCart.map((product, index) => {
        return (
            <tr key={index}>
                <td>
                    <div className="cart-image-wrapper">
                        <img src={product.image} />
                    </div>
                    <span className="product-name">{product.dish}</span>
                </td>
                <td>
                    <span className="k-widget k-numerictextbox">
                        <span className="k-numeric-wrap k-state-default">
                            <input type="number" className="k-formatted-value k-input"
                                defaultValue={product.amount.toFixed(2)}
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
                    <span>${total.toFixed(2)}</span>
                </p>
                <a className="cancel-order" href="#">cancel order</a>
                <button className="order-now">order now!</button>
            </div>
            <div id="checkout-bottom-image" />
        </div>
    )
}

export default CheckoutOrder;