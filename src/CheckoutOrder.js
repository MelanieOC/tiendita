import React, { Component } from 'react';
import './CheckoutOrder.css';
import {NavLink} from 'react-router-dom';
import {changeAmount,emptyCart} from './Actions.js';

const CheckoutOrder = ({ shoppingCart, total }) => {
    
    const products = shoppingCart.map((product, index) => {
        this.input=[];
        return (
            <tr key={index}>
                <td>
                    <div className="cart-image-wrapper">
                        <img src={product.image} />
                    </div>
                    <span className="product-name">{product.dish}</span>
                </td>
                <td>
                    <span>
                        <span>
                            <input type="number"
                                defaultValue={product.amount}
                                style={{ display: 'inline-block' }} 
                                ref={(e) => this.input[index] = e}
                                min='0'
                                onChange={()=>{this.input[index].value?changeAmount(product.dish, this.input[index].value):''}}/>
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
                <NavLink className="cancel-order" to='/' onClick={emptyCart}>cancel order</NavLink>
                <NavLink className="order-now" to='/' onClick={emptyCart}>order now!</NavLink>
            </div>
            <div id="checkout-bottom-image" />
        </div>
    )
}

export default CheckoutOrder;