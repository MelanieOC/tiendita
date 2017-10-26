import React, { Component } from 'react';
import './CheckoutOrder.css';

const CheckoutOrder = ({selected}) => {
    return (
            <div  id="wrapper">
                <section id='main-section'>
                <div id='content'>
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
                            <tr>
                                <td>
                                    <div className="cart-image-wrapper">
                                        {/* <img src="/kendo-ui/content/spa/websushi/images/200/miso-soup.jpg" /> */}
                                    </div>
                                    <span className="product-name">Miso soup</span>
                                </td>
                                <td>
                                    <span className="k-widget k-numerictextbox">
                                        <span className="k-numeric-wrap k-state-default">
                                            <input
                                                type="text"
                                                className="k-formatted-value k-input"
                                                title={1.00}
                                                tabIndex={0}
                                                style={{ display: 'inline-block' }} />
                                            <input
                                                type="text"
                                                className="k-input"
                                                style={{ display: 'none' }} />
                                            <span
                                                className="k-icon k-i-warning"
                                                style={{ display: 'none' }} />
                                            <span className="k-select">
                                                <span
                                                    unselectable="on"
                                                    className="k-link k-link-increase"
                                                    aria-label="Increase value"
                                                    title="Increase value">
                                                    <span
                                                        unselectable="on"
                                                        className="k-icon k-i-arrow-60-up" />
                                                </span>
                                                <span
                                                    unselectable="on"
                                                    className="k-link k-link-decrease"
                                                    aria-label="Decrease value"
                                                    title="Decrease value">
                                                    <span
                                                        unselectable="on"
                                                        className="k-icon k-i-arrow-60-down" />
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </td>
                                <td>
                                    <p className="table-price">$4.00</p>
                                </td>
                            </tr>
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
                </section>
            </div>
    )
}

export default CheckoutOrder;