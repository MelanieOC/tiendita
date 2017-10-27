import React, { Component } from 'react';
import './body.css';
import logo from './images/logo.png';
import {NavLink} from 'react-router-dom';

export const Body = ({ component, order, shoppingCart }) => {
    return (
        <div id="application">
            <div>
                <div id="wrapper">
                    <div id="header">
                        <h1 className="logo">
                            <NavLink to="/">
                                <img src={logo} />
                            </NavLink>
                        </h1>
                        <a id="cart-info" href="#">
                            Shopping Cart
                            <span>
                                <span>{shoppingCart.length}</span> items
                            </span>
                        </a>
                    </div>
                    {
                        order && <p >Thank you for your order!</p>
                    }
                    <div id="main-section">
                        {
                            order &&
                            <section id="pre-content">
                                {
                                    order
                                }

                            </section>
                        }

                        <section id="content">
                            {
                                component
                            }

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